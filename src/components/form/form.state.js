import {
  observable,
  action,
}                from 'mobx'
import invariant from 'invariant'

export default class Form {
  validators  = {}
  formData    = observable.map()
  errors      = observable.map()
  @observable
  isFormValid = false

  constructor({
    validators,
  }) {
    invariant(typeof validators === 'object', `'validators' must be provided.`)
    if (!Object.keys(validators).every(key => typeof validators[key] === 'function')) {
      throw new Error(`Every value of validators must be a function`)
    }

    this.validators = validators
  }

  /**
   * setAllValues will merge given object with existing formData.
   *
   * @param {object} values
   */
  @action
  setAllValues(values = {}) {
    Object.keys(values).forEach(key => {
      this.set(key, value)
    })
  }

  /**
   * set will set the key/value pairing in formData.
   *
   * @param {string} key
   * @param {string} value
   */
  @action
  set(key, value) {
    if (!(key in this.validators)) {
      throw new Error(`'${key}' not a field in validators.`)
    }

    this.formData.set(key, value)
    this.validateAll()
  }

  /**
   * validateAll will run all the validators and set the instance variable
   * isFormValid to the appropriate boolean.
   *
   * @returns {boolean}
   */
  @action
  validateAll() {
    const keys = Object.keys(this.validators)

    let hasError = false
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      try {
        this.validators[key](this.formData.get(key), this.getAllFormDataValues())
        this.errors.set(key, null)
      } catch (err) {
        this.errors.set(key, err)
        hasError = true
      }
    }

    this.isFormValid = hasError
    return hasError
  }

  /**
   * getError will return the error associated with the given key.
   *
   * @returns {error}
   */
  getError(key) {
    return this.errors.get(key)
  }

  /**
   * getAllFormDataValues will return key/value object with all the inputted
   * values.
   *
   * @returns {object}
   */
  getAllFormDataValues() {
    const keys = this.formData.keys()
    return keys.reduce((obj, key) => {
      obj[key] = this.formData.get(key)
      return obj
    }, {})
  }
}
