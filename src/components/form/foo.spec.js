import { observable, computed, autorun } from 'mobx'

import FormNode                          from './FormNode.js'
import FormState                         from './FormState.js'

const tree = new FormState()
tree.insert('name', {
  type: FormNode.types.VALUE,
  validate: (value = '') => value.length < 2 && 'hi',
})
tree.insert('foo', {
  type: FormNode.types.MAP,
})
tree.insert('foo.bar', {
  type: FormNode.types.VALUE,
  validate: (value = '') => value.length < 2 && 'hi',
})

autorun(() => {
  console.log('treevalue', tree.validationError)
})

tree.value.name.value = 'asdok'
tree.value.foo.value.bar.value = 'asdok'

describe('hi', () => {
  it('ok', async () => {})
})
