import invariant                        from 'invariant'
import { computed, observable, action } from 'mobx'

export default class FormNode {
  static types = {
    ARRAY: 'array',
    MAP: 'map',
    VALUE: 'value',
  }

  // createChildNodeFromJS recursively instantiates FormNodes
  static createChildNodeFromJS = value => {
    if (value.constructor === Array) {
      return new FormNode({
        type: FormNode.types.ARRAY,
        value: value.map(val => FormNode.createChildNodeFromJS(val)),
      })
    } else if (value.constructor === Object) {
      return new FormNode({
        type: FormNode.types.MAP,
        value: Object.entries(value).reduce((map, [key, val]) => {
          return {
            ...map,
            [key]: FormNode.createChildNodeFromJS(val),
          }
        }, {}),
      })
    } else {
      return new FormNode({
        type: FormNode.types.VALUE,
        initialValue: value,
        value,
      })
    }
  }

  type = undefined
  // (value: any): string || undefined
  @observable validate = undefined
  @observable initialValue = ''
  @observable value = undefined

  @computed
  get validationError() {
    // setting validate in an ancestor node can override subtree validations
    if (this.validate) {
      return this.validate(this.toJS())
    }
    switch (this.type) {
      case FormNode.types.ARRAY:
        return this.value.some(n => Boolean(n.validationError))
      case FormNode.types.MAP:
        return Object.values(this.value).some(n => Boolean(n.validationError))
      default:
        return this.validate && this.validate(this.toJS())
    }
  }

  @computed
  get modified() {
    switch (this.type) {
      case FormNode.types.ARRAY:
        return this.value.some(n => n.modified)
      case FormNode.types.MAP:
        return Object.values(this.value).some(n => n.modified)
      default:
        return this.toJS() !== this.initialValue
    }
  }

  constructor({ type, ...args } = {}) {
    invariant(
      Object.values(FormNode.types).includes(type),
      `'type' must be one of ${Object.values(FormNode.types)}`,
    )

    this.type = type
    const initializeValue = {
      [FormNode.types.ARRAY]: () => (this.value = []),
      [FormNode.types.MAP]: () => (this.value = {}),
      [FormNode.types.VALUE]: () => (this.value = ''),
    }
    initializeValue[type]()
    this.setInstanceVariables({ ...args })
  }

  @action
  setInstanceVariables = ({
    validate = this.validate,
    value = this.value,
    initialValue = this.initialValue,
  } = {}) => {
    this.validate = validate
    this.value = value
    this.initialValue = initialValue
  }

  @action
  setValue = value => {
    if (this.type === FormNode.types.VALUE) {
      this.value = value
    }
  }

  reset = (node = this) => {
    this._mapOverNodeValue(node, {
      [FormNode.types.ARRAY]: n => n.reset(n),
      [FormNode.types.MAP]: n => n.reset(n),
      [FormNode.types.VALUE]: n => n.setValue(n.initialValue),
    })
  }

  toJS = () => {
    return this._mapOverNodeValue(this, {
      [FormNode.types.ARRAY]: node => node.toJS(),
      [FormNode.types.MAP]: node => node.toJS(),
      [FormNode.types.VALUE]: node => node.value,
    })
  }

  createChildNode = opts => {
    return new FormNode({ ...opts })
  }

  /**
   * find will return a descendant FormNode with the given path.
   *
   * @param {string} path
   * @returns {FormNode}
   */
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

  _mapOverNodeValue(node = this, obj) {
    switch (node.type) {
      case FormNode.types.ARRAY:
        return node.value.map(obj[FormNode.types.ARRAY])
      case FormNode.types.MAP:
        return Object.entries(node.value).reduce(
          (map, [key, value]) => ({
            ...map,
            [key]: obj[FormNode.types.MAP](value, key),
          }),
          {},
        )
      case FormNode.types.VALUE:
        return obj[FormNode.types.VALUE](node)
    }
  }
}
