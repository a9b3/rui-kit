import {observable, action} from 'mobx'

import types                from './types.js'

class FormNode {
  path = ''
  parent = undefined
  children = undefined
  _pathDelimiter = '.'

  constructor({parent} = {}) {
    this.parent = parent
  }
}

class FormValue extends FormNode {
  @observable value = undefined
  initialValue = undefined

  constructor({value, initialValue, ...rest} = {}) {
    super({...rest})
    this.value = value
    this.initialValue = initialValue
  }

  toJS() {
    return this.value
  }

  @action
  setValue(value) {
    this.value = value
  }
}

class FormMap extends FormNode {
  children = new Map()

  toJS() {
    const obj = {}
    this.children.forEach((value, key) => {
      obj[key] = value.toJS()
    })
    return obj
  }
}

class FormArray extends FormNode {
  children = []

  toJS() {
    return this.children.map(child => child.toJS())
  }
}

export default class FormState extends FormMap {
  @observable isSubmitting = false
  @observable submitError = undefined

  // meant to be used in Form component only
  @action
  callOnSubmit = async (onSubmit) => {
    this.isSubmitting = true
    this.submitError = undefined
    try {
      await onSubmit(this.toJS())
    } catch (err) {
      console.error(err)
      this.submitError = err.message
    }
    this.isSubmitting = false
  }

  get(path, cursor = this) {
    if (path.trim() === '') {
      return cursor
    }

    const tokens = path.split(this._pathDelimiter)
    let nextNode
    if (cursor instanceof FormMap) {
      nextNode = cursor.children.get(tokens[0])
    } else if (cursor instanceof FormArray) {
      nextNode = cursor.children[tokens[0]]
    }

    if (!nextNode) {
      return
    }
    return this.get(tokens.slice(1).join(this._pathDelimiter), nextNode)
  }

  create(path, type, fieldArgs) {
    const tokens = path.split(this._pathDelimiter)
    const key = tokens.pop()
    const parentPath = tokens.join(this._pathDelimiter)
    const parent = this.get(parentPath)

    const nodeToInsert = this.createTypedNode(parent, type, fieldArgs)
    if (parent instanceof FormMap) {
      parent.children.set(key, nodeToInsert)
    } else if (parent instanceof FormArray) {
      parent.children.splice(key, 0, nodeToInsert)
    }
    return nodeToInsert
  }

  createTypedNode(parent, type, fieldArgs) {
    const args = {
      ...fieldArgs,
      parent,
    }
    switch(type) {
    case types.MAP:
      return new FormMap(args)
    case types.ARRAY:
      return new FormArray(args)
    case types.VALUE:
      return new FormValue(args)
    }
  }
}
