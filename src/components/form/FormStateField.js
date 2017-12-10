import invariant              from 'invariant'
import {noop}                 from 'lodash'
import {observable, computed} from 'mobx'

import FormState              from '~/components/form/FormState'

export default class FormStateField {
  validate          = noop
  parent            = undefined
  @observable error = undefined
  initialValue      = ''
  @observable value = ''

  @computed get modified() {
    return this.initialValue !== this.value
  }

  constructor({validate = noop, parent, initialValue = '', initValidate}) {
    invariant(typeof validate === 'function', `'validate' must be function`)
    invariant(parent instanceof FormState, `'parent' must be instanceof FormState`)

    this.initialValue = initialValue
    this.validate = validate
    this.parent = parent
    this.value = initialValue

    if (initValidate) {
      this.callValidate()
    }
  }

  setInitialValue = (value) => {
    this.initialValue = value
    this.value = value
  }

  callValidate = () => {
    this.error = this.validate(this.value, this.parent.getAllValues())
  }

  setValue = (value) => {
    this.value = value
    this.callValidate()
    this.parent.calculateFormValidity()
    this.parent.calculate()
  }
}
