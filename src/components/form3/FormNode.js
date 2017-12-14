import invariant                      from 'invariant'
import {noop}                         from 'lodash'
import {computed, observable, action} from 'mobx'

export default class FormNode {
  static types = {
    ARRAY: 'array',
    MAP  : 'map',
    VALUE: 'value',
  }

  parent                               = undefined
  type                                 = undefined
  // (value: any): string || undefined
  @observable validate                 = noop
  @observable initialValue             = undefined
  @observable value                    = undefined

  _mapOverNode(node = this, obj) {
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

  _mapOverJS(value, obj) {
    if (!value.constructor) {
      return obj[FormNode.types.VALUE](value)
    } else if (value.constructor === Array) {
      return value.map(obj[FormNode.types.ARRAY])
    } else if (value.constructor === Object) {
      return Object.keys(value)
        .reduce((map, key) => {
          map[key] = value.map(obj[FormNode.types.MAP], key)
          return map
        }, {})
    } else {
      return obj[FormNode.types.VALUE](value)
    }
  }

  @computed
  get validationError() {
    return this._mapOverNode(this, {
      [FormNode.types.ARRAY]: node => node.validationError,
      [FormNode.types.MAP]  : node => node.validationError,
      [FormNode.types.VALUE]: node => node.validate(node.toJS()),
    })
  }

  @computed
  get modified() {
    return this._mapOverNode(this, {
      [FormNode.types.ARRAY]: node => node.modified,
      [FormNode.types.MAP]  : node => node.modified,
      [FormNode.types.VALUE]: node => node.toJS() === node.initialValue,
    })
  }

  constructor({type, parent, ...args} = {}) {
    invariant(
      Object.values(FormNode.types).includes(type),
      `'type' must be one of ${Object.values(FormNode.types)}`
    )

    this.parent = parent
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
  setInstanceVariables({
    validate     = this.validate,
    value        = this.value,
    initialValue = this.initialValue,
  } = {}) {
    this.validate     = validate
    this.value        = value
    this.initialValue = initialValue
  }

  reset(node = this) {
    this._mapOverNode(node, {
      [FormNode.types.ARRAY]: n => this.reset(n),
      [FormNode.types.MAP]  : n => this.reset(n),
      [FormNode.types.VALUE]: n => n.value = n.initialValue,
    })
  }

  toJS() {
    return this._mapOverNode(this, {
      [FormNode.types.ARRAY]: node => node.toJS(),
      [FormNode.types.MAP]  : node => node.toJS(),
      [FormNode.types.VALUE]: node => node.value,
    })
  }

  createChildNodeFromJS(value, parent = this) {
    let createdNode
    if (!value.constructor) {
      createdNode = new FormNode({type: FormNode.types.VALUE, parent, value})
    } else if (value.constructor === Array) {
      createdNode = new FormNode({type: FormNode.types.ARRAY, parent})
      createdNode.value = value.map(val => this.createChildNodeFromJS(val, createdNode))
    } else if (value.constructor === Object) {
      createdNode = new FormNode({type: FormNode.types.MAP, parent})
      createdNode.value = Object.keys(value).reduce((map, key) => {
        map[key] = this.createChildNodeFromJS(value[key], createdNode)
        return map
      }, {})
    } else {
      createdNode = new FormNode({type: FormNode.types.VALUE, parent, value})
    }
    return createdNode
  }
}
