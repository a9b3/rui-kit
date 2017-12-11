import invariant            from 'invariant'
import {get}                from 'lodash'
import {observable, action} from 'mobx'

import FormStateField       from '~/components/form/FormStateField'

export default class FormState {
  formStateFieldsMap         = observable.map()
  @observable isFormValid    = true
  @observable isFormModified = false
  @observable submitError    = undefined
  @observable isSubmitting   = undefined

  get = (path, cursor = this.formStateFieldsMap) => {
    const tokens = path.split('.')
    const node = cursor.get(tokens[0])
    if (!node) {
      return
    }
    if (!tokens.length === 0) {
      return cursor
    }
    return this.get(tokens.slice(1), node)
  }

  getFormStateField = (name) => {
    if (!this.formStateFieldsMap.has(name)) {
      this.setField(name, undefined)
    }
    return this.formStateFieldsMap.get(name)
  }

  setField = (key, value) => {
    this.formStateFieldsMap.set(
      key,
      new FormStateField({...value, parent: this})
    )
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
    this.isSubmitting = true
    this.submitError = undefined
    try {
      await onSubmit(this.getAllValues())
    } catch (err) {
      console.error(err)
      this.submitError = err.message
    }
    this.isSubmitting = false
  }
}
