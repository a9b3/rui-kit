import {observable, computed} from 'mobx'

export default class FormStateField {
  validate = () => {}
  parent = undefined
  @observable
  error = undefined
  initialValue = undefined
  @observable
  value = ''

  @computed
  get modified() {
    return this.initialValue !== this.value
  }

  constructor({validate, parent, initialValue, initValidate}) {
    this.initialValue = initialValue
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
    this.parent.calculateFormValidity()
  }
}
