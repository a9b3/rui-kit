import invariant                      from 'invariant'
import {noop}                         from 'lodash'
import {computed, observable, action} from 'mobx'

export class FormNode {
  static types = {
    ARRAY: 'array',
    MAP  : 'map',
    VALUE: 'value',
  }

  parent                        = undefined
  type                          = undefined
  @observable validate          = noop
  @observable calculateModified = noop
  @observable value             = undefined

  _mapOverValue(obj) {
    switch(this.type) {
    case FormNode.types.ARRAY:
      return this.value.map(obj[FormNode.types.ARRAY])
    case FormNode.types.MAP:
      return Object.keys(this.value)
        .reduce((map, key) => {
          map[key] = obj[FormNode.types.MAP](this.value[key])
          return map
        }, {})
    case FormNode.types.VALUE:
      return obj[FormNode.types.VALUE](this.value)
    }
  }

  @computed
  get validationError() {
    return this._mapOverValue({
      [FormNode.types.ARRAY]: v => v.validationError,
      [FormNode.types.MAP]  : v => v.validationError,
      [FormNode.types.VALUE]: v => this.validate(v),
    })
  }

  @computed
  get modified() {
    return this._mapOverValue({
      [FormNode.types.ARRAY]: v => v.modified,
      [FormNode.types.MAP]  : v => v.modified,
      [FormNode.types.VALUE]: v => this.calculateModified(v),
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
    calculateModified = this.calculateModified,
    validate          = this.validate,
    value             = this.value,
  } = {}) {
    this.calculateModified = calculateModified
    this.validate          = validate
    this.value             = value
  }

  toJS() {
    return this._mapOverValue({
      [FormNode.types.ARRAY]: v => v.toJS(),
      [FormNode.types.MAP]  : v => v.toJS(),
      [FormNode.types.VALUE]: v => v,
    })
  }
}
