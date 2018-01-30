import invariant              from 'invariant'
import { observable, action } from 'mobx'

import FormNode               from './FormNode.js'

export default class FormState extends FormNode {
  @observable submitting = false
  @observable submitError = undefined

  constructor({ ...args }) {
    super({ ...args, type: FormNode.types.MAP })
  }

  callOnSubmit = onSubmit => {
    return action(async event => {
      event.preventDefault()
      this.submitting = true
      this.submitError = undefined
      try {
        await onSubmit(this.toJS())
      } catch (err) {
        console.error(err)
        this.submitError = err.message
      }
      this.submitting = false
    })
  }

  _getParentPath = path => {
    const tokens = path.split('.')
    return tokens.slice(0, tokens.length - 1).join('.')
  }

  insert = (path, args) => {
    const parent = this.find(this._getParentPath(path))
    invariant(parent, `'parent' does not exist for given ${path}`)
    const newNode = new FormNode(args)
    parent.value[path.split('.').pop()] = newNode
    return newNode
  }
}
