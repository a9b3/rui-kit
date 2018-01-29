import { observable, action } from 'mobx'

import FormNode               from './FormNode.js'

export default class FormState extends FormNode {
  @observable submitting = false
  @observable submitError = undefined

  constructor({ ...args }) {
    super({ ...args, type: FormNode.types.MAP })
  }

  @action
  callOnSubmit = async onSubmit => {
    this.submitting = true
    this.submitError = undefined
    try {
      await onSubmit(this.toJS())
    } catch (err) {
      console.error(err)
      this.submitError = err.message
    }
    this.submitting = false
  }

  getParentPath = path => {
    const tokens = path.split('.')
    return tokens.slice(0, tokens.length - 1).join('.')
  }
}
