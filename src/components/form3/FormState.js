import invariant                      from 'invariant'
import {noop}                         from 'lodash'
import {computed, observable, action} from 'mobx'

import FormNode                       from './FormNode.js'

export default class FormState extends FormNode {
  constructor(args) {
    super({...args, type: FormNode.types.MAP, parent: undefined})
  }

  get(path = '', cursor = this) {
    const tokens = path.split('.')
    if (tokens.length === 0) {
      return cursor
    }
    const nextNode = cursor.value[tokens[0]]
    if (!nextNode) {
      return undefined
    }
    return this.get(tokens.slice(1), nextNode)
  }

  create(path) {

  }
}
