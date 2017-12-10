import invariant            from 'invariant'
import {observable, action} from 'mobx'

import FormStateField       from '~/components/form/FormStateField'

export default class FormState {
  formStateFieldsMap = observable.map()
  @observable isFormValid = true
  @observable isFormModified = false
  @observable error = undefined
  @observable loading = undefined

  constructor({fields = {}}) {
    this.setFields(fields)
  }

  getFormStateField = (name) => {
    invariant(this.formStateFieldsMap.has(name), `'${name}' is not a field in this form, choose from one of '${this.formStateFieldsMap.keys()}'`)
    return this.formStateFieldsMap.get(name)
  }

  setField = (key, value) => {
    this.formStateFieldsMap.set(
      key,
      new FormStateField({...value, parent: this})
    )
  }

  setFields = (fields) => {
    Object.entries(fields)
      .forEach(([key, value]) => {
        this.setField(key, value)
      })
  }

  setInitialValues = (initialValues) => {
    Object.entries(initialValues).forEach(([key, value]) => {
      this.getFormStateField(key).setInitialValue(value)
    })
  }

  getAllValues = () => this.formStateFieldsMap.entries()
    .reduce((obj, [key, {value}]) => {
      obj[key] = value
      return obj
    }, {})

  /*
   * State methods
   * sets instance variables
   */

  @action
  calculate = () => {
    this.calculateFormValidity()
    this.calculateFormModified()
  }

  @action
  calculateFormValidity = () => {
    this.formStateFieldsMap.forEach(f => f.callValidate())
    this.isFormValid = this.formStateFieldsMap
      .values()
      .every(formStateField => !formStateField.error)
  }

  @action
  calculateFormModified = () => {
    this.isFormModified = this.formStateFieldsMap
      .values()
      .some(formStateField => formStateField.modified)
  }

  // meant to be used in Form component only
  @action
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
