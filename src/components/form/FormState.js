import {observable}   from 'mobx'

import FormStateField from './FormStateField.js'

export default class FormState {
  formStateFieldsMap = observable.map()
  @observable
  error = undefined
  @observable
  loading = undefined

  constructor({fields = {}}) {
    this.setFields(fields)
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
}
