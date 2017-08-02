import { observable } from 'mobx'
import invariant      from 'invariant'

export default class Form {
  formData = observable.map()
  validators = {}
  errors = observable.map()

  constructor({ validators }) {
    invariant(typeof validators === 'object', `'validators' must be provided.`)
    if (!Object.keys(validators).every(key => typeof validators[key] === 'function')) {
      throw new Error(`Every value of validators must be a function`)
    }

    this.validators = validators
  }

  set(key, value) {
    if (!(key in this.validators)) {
      throw new Error(`'${key}' not a field in validators.`)
    }

    this.formData.set(key, value)
    this.validate(key)
  }

  getError(key) {
    return this.errors.get(key)
  }

  validate(key) {
    if (!(key in this.validators)) {
      throw new Error(`'${key}' not a field in validators.`)
    }

    try {
      this.validators[key](this.formData.get(key), this.getAllFormDataValues())
      this.errors.set(key, null)
    } catch (err) {
      this.errors.set(key, err)
    }

    return true
  }

  getAllFormDataValues() {
    const keys = this.formData.keys()
    return keys.reduce((obj, key) => {
      obj[key] = this.formData.get(key)
      return obj
    }, {})
  }

  validateAll() {
    return Object.keys(this.validators)
      .every(key => this.validate(key))
  }
}
