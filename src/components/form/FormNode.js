import invariant                        from 'invariant'
import { noop }                         from 'lodash'
import { computed, observable, action } from 'mobx'

export default class FormNode {
  static types = {
    ARRAY: 'array',
    MAP: 'map',
    VALUE: 'value',
  }

  type = undefined
  // (value: any): string || undefined
  @observable validate = noop
  @observable initialValue = ''
  @observable value = undefined

  @computed
  get validationError() {
    if (this.validate) {
      return this.validate(this.toJS())
    }
    return {
      [FormNode.types.ARRAY]: node =>
        node.value.some(n => Boolean(n.validationError)),
      [FormNode.types.MAP]: node =>
        Object.keys(node.value).some(key =>
          Boolean(node.value[key].validationError),
        ),
      [FormNode.types.VALUE]: node => node.validate(node.toJS()),
    }[this.type](this)
  }

  @computed
  get modified() {
    return {
      [FormNode.types.ARRAY]: node => node.value.some(n => n.modified),
      [FormNode.types.MAP]: node =>
        Object.keys(node.value).some(key => node.value[key].modified),
      [FormNode.types.VALUE]: node => node.toJS() !== node.initialValue,
    }[this.type](this)
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

  /**
   * createChildNodeFromJS recursively instantiates FormNodes
   */
  createChildNodeFromJS = value => {
    let createdNode
    if (value.constructor === Array) {
      createdNode = new FormNode({ type: FormNode.types.ARRAY })
      createdNode.value = value.map(val =>
        this.createChildNodeFromJS(val, createdNode),
      )
    } else if (value.constructor === Object) {
      createdNode = new FormNode({ type: FormNode.types.MAP })
      createdNode.value = Object.entries(value).reduce(
        (map, [key, val]) =>
          Object.assign(map, {
            [key]: this.createChildNodeFromJS(val, createdNode),
          }),
        {},
      )
    } else {
      createdNode = new FormNode({
        value,
        type: FormNode.types.VALUE,
        initialValue: value,
      })
    }
    return createdNode
  }

  createChildNode = opts => {
    return new FormNode({ ...opts })
  }

  /**
   * find will return a descendant FormNode
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
