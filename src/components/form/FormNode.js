import invariant                        from 'invariant'
import { computed, observable, action } from 'mobx'
import uuid                             from 'uuid/v4'

export default class FormNode {
  static types = {
    ARRAY: 'array',
    MAP: 'map',
    VALUE: 'value',
  }

  id = uuid()
  type = undefined
  // (value: any): string || undefined
  @observable validate = undefined
  @observable initialValue = ''
  @observable value = ''

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
        return this.value.values().some(n => Boolean(n.validationError))
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
        return this.value.values().some(n => n.modified)
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
    switch (this.type) {
      case FormNode.types.ARRAY:
        this.value = observable.array()
        break
      case FormNode.types.MAP:
        this.value = observable.map()
        break
      default:
        this.value = ''
        break
    }
    this.setInstanceVariables({ ...args })
  }

  @action
  setInstanceVariables = ({
    validate = this.validate,
    value = this.value,
    initialValue = this.initialValue,
  } = {}) => {
    this.validate = validate
    this.value = initialValue || value
    this.initialValue = initialValue
  }

  @action
  setValue = value => {
    if (this.type === FormNode.types.VALUE) {
      this.value = value
    }
  }

  @action
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
    let nextNode
    switch (cursor.type) {
      case FormNode.types.ARRAY:
        nextNode = cursor.value[tokens[0]]
      case FormNode.types.MAP:
        nextNode = cursor.value.get(tokens[0])
    }
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
        return node.value.entries().reduce(
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
