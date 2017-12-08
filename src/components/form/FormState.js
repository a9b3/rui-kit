import {observable}   from 'mobx'

import FormStateField from './FormStateField.js'

export default class FormState {
  formStateFieldsMap = observable.map()
  @observable
  isFormValid = true

  @observable
  error = undefined
  @observable
  loading = undefined

  constructor({fields = {}, initValidate}) {
    this.setFields(fields)

    if (initValidate) {
      this.calculateFormValidity()
    }
  }

  setFields = (fields) => {
    Object.entries(fields).forEach(([key, value]) => {
      this.formStateFieldsMap.set(key, new FormStateField({
        ...value,
        parent: this,
      }))
    })
  }

  getAllValues = () => this.formStateFieldsMap.entries()
    .reduce((obj, [key, {value}]) => {
      obj[key] = value
      return obj
    }, {})

  calculateFormValidity = () => {
    let isFormValid = true
    this.formStateFieldsMap.forEach(formStateField => {
      if (isFormValid) {
        isFormValid = !formStateField.error
      }
    })
    this.isFormValid = isFormValid
  }

  callOnSubmit = async (onSubmit) => {
    this.loading = true
    this.error = undefined

    try {
      await onSubmit(this.getAllValues())
    } catch (err) {
      console.error(err)
      this.error = err
    }
    this.loading = false
  }
}
