import invariant      from 'invariant'
import {observable}   from 'mobx'

import FormStateField from './FormStateField.js'

export default class FormState {
  formStateFieldsMap = observable.map()
  @observable isFormValid = true
  @observable error = undefined
  @observable loading = undefined

  constructor({fields = {}}) {
    this.setFields(fields)
  }

  setFields = (fields) => {
    Object.entries(fields)
      .forEach(([key, value]) => {
        this.formStateFieldsMap.set(
          key,
          new FormStateField({...value, parent: this})
        )
      })
  }

  getFormStateField = (name) => {
    invariant(this.formStateFieldsMap.has(name), `'${name}' is not a field in this form`)
    return this.formStateFieldsMap.get(name)
  }

  getAllValues = () => this.formStateFieldsMap.entries()
    .reduce((obj, [key, {value}]) => {
      obj[key] = value
      return obj
    }, {})

  calculateFormValidity = () => {
    this.formStateFieldsMap.forEach(f => f.callValidate())
    this.isFormValid = this.formStateFieldsMap
      .values()
      .every(formStateField => !formStateField.error)
  }

  // meant to be used in Form component only
  callOnSubmit = async (onSubmit) => {
    this.loading = true
    this.error = undefined
    try {
      await onSubmit(this.getAllValues())
    } catch (err) {
      console.error(err)
      this.error = err.message
    }
    this.loading = false
  }
}
