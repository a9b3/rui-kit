import invariant                      from 'invariant'
import {noop}                         from 'lodash'
import {computed, observable, action} from 'mobx'

export default class FormNode {
  static types = {
    ARRAY: 'array',
    MAP  : 'map',
    VALUE: 'value',
  }

  path                                 = undefined
  parent                               = undefined
  type                                 = undefined
  // (value: any): string || undefined
  @observable validate                 = noop
  @observable initialValue             = undefined
  @observable value                    = undefined

  @computed
  get validationError() {
    if (this.validate) {
      return this.validate(this.toJS())
    }
    return {
      [FormNode.types.ARRAY]: node => node.value.some(n => Boolean(n.validationError)),
      [FormNode.types.MAP]  : node => Object.keys(node.value).some(key => Boolean(node.value[key].validationError)),
      [FormNode.types.VALUE]: node => node.validate(node.toJS()),
    }[this.type](this)
  }

  @computed
  get modified() {
    return {
      [FormNode.types.ARRAY]: node => node.value.some(n => n.modified),
      [FormNode.types.MAP]  : node => Object.keys(node.value).some(key => node.value[key].modified),
      [FormNode.types.VALUE]: node => node.toJS() !== node.initialValue,
    }[this.type](this)
  }

  /*********************
   * Public API
   *********************/

  constructor({type, path, parent, ...args} = {}) {
    invariant(
      Object.values(FormNode.types).includes(type),
      `'type' must be one of ${Object.values(FormNode.types)}`
    )

    this.parent = parent
    this.path = path
    this.type   = type
    const initializeValue = {
      [FormNode.types.ARRAY]: () => this.value = [],
      [FormNode.types.MAP]  : () => this.value = {},
      [FormNode.types.VALUE]: () => this.value = '',
    }
    initializeValue[type]()
    this.setInstanceVariables({...args})
  }

  @action
  setInstanceVariables = ({
    validate     = this.validate,
    value        = this.value,
    initialValue = this.initialValue,
    path         = this.path,
  } = {}) => {
    this.validate     = validate
    this.value        = value
    this.initialValue = initialValue
    this.path         = path
  }

  @action
  setValue = (value) => {
    if (this.type === FormNode.types.VALUE) {
      this.value = value
    }
  }

  reset = (node = this) => {
    this._mapOverNodeValue(node, {
      [FormNode.types.ARRAY]: n => this.reset(n),
      [FormNode.types.MAP]  : n => this.reset(n),
      [FormNode.types.VALUE]: n => n.setValue(n.initialValue),
    })
  }

  toJS = () => {
    return this._mapOverNodeValue(this, {
      [FormNode.types.ARRAY]: node => node.toJS(),
      [FormNode.types.MAP]  : node => node.toJS(),
      [FormNode.types.VALUE]: node => node.value,
    })
  }

  createChildNodeFromJS = (value, path, parent = this) => {
    let createdNode
    if (!value.constructor) {
      createdNode = new FormNode({type: FormNode.types.VALUE, parent, value, initialValue: value, path})
    } else if (value.constructor === Array) {
      createdNode = new FormNode({type: FormNode.types.ARRAY, parent, path})
      createdNode.value = value.map((val, i) => this.createChildNodeFromJS(
        val,
        [path, i].filter(a => a !== undefined).join('.'),
        createdNode
      ))
    } else if (value.constructor === Object) {
      createdNode = new FormNode({type: FormNode.types.MAP, parent, path})
      createdNode.value = Object.keys(value).reduce((map, key) => {
        console.log(key, value[key], path)
        map[key] = this.createChildNodeFromJS(
          value[key],
          [path, key].filter(a => a !== undefined).join('.'),
          createdNode,
        )
        return map
      }, {})
    } else {
      createdNode = new FormNode({type: FormNode.types.VALUE, parent, value, initialValue: value, path})
    }
    return createdNode
  }

  find = (path = '', cursor = this) => {
    const tokens = path.split('.').filter(Boolean)
    if (tokens.length === 0) {
      return cursor
    }
    const nextNode = cursor.value[tokens[0]]
    if (!nextNode) {
      return undefined
    }
    return this.find(tokens.slice(1).join('.'), nextNode)
  }

  /*********************
   * Util functions
   *********************/

  _mapOverNodeValue(node = this, obj) {
    switch(node.type) {
    case FormNode.types.ARRAY:
      return node.value.map(obj[FormNode.types.ARRAY])
    case FormNode.types.MAP:
      return Object.keys(node.value)
        .reduce((map, key) => {
          map[key] = obj[FormNode.types.MAP](node.value[key], key)
          return map
        }, {})
    case FormNode.types.VALUE:
      return obj[FormNode.types.VALUE](node)
    }
  }
}
