import {observable} from 'mobx'

export default class FormStateField {
  validate = () => {}
  parent = undefined
  @observable
  error = undefined
  @observable
  value = ''

  constructor({validate, parent, initialValue, initValidate}) {
    this.validate = validate
    this.parent = parent
    this.value = initialValue

    if (initValidate) {
      this.callValidate()
    }
  }

  callValidate = () => {
    this.error = this.validate(this.value, this.parent.getAllValues())
  }

  setValue = (value) => {
    this.value = value
    this.callValidate()
  }
}
