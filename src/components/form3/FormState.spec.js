import {isEqual}  from 'lodash'

import {FormNode} from './FormState.js'

describe('FormState', () => {
  it('tree construction', async () => {
    const root = new FormNode({type: FormNode.types.MAP})
    root.value.foo = new FormNode({type: FormNode.types.VALUE, parent: root, value: 'testing'})
    root.value.bar = new FormNode({type: FormNode.types.VALUE, parent: root, value: 'bar'})
    root.value.zed = new FormNode({type: FormNode.types.ARRAY, parent: root})

    console.log(root.toJS())
  })
})
