import expect    from 'expect'
import {isEqual} from 'lodash'

import FormNode  from './FormNode.js'

describe('FormNode', () => {
  it('tree construction', async () => {
    const root = new FormNode({type: FormNode.types.MAP})
    root.value.foo = new FormNode({type: FormNode.types.VALUE, parent: root, value: 'testing'})
    root.value.bar = new FormNode({
      type    : FormNode.types.VALUE,
      parent  : root,
      value   : 'bar',
      validate: (value) => {
        return 'hi'
      },
      calculateModified: (value) => {
        return false
      },
    })
    root.value.zed = new FormNode({type: FormNode.types.ARRAY, parent: root})
    root.value.zed.value.push(new FormNode({type: FormNode.types.VALUE, parent: root.value.zed, value: 'hi'}))
    root.value.map = new FormNode({type: FormNode.types.MAP, parent: root})
    root.value.map.value.inner = new FormNode({type: FormNode.types.VALUE, parent: root.value.map, value: 'inner'})
    const expected = {
      foo: 'testing',
      bar: 'bar',
      zed: [
        'hi',
      ],
      map: {
        inner: 'inner',
      },
    }

    expect(root.toJS()).toEqual(expected)
  })

  it('createChildNodeFromJS()', async () => {
    const testcase = {
      bar: 'bar',
      zed: {x: 'x'},
      arr: ['ok'],
    }
    const root = new FormNode({type: FormNode.types.MAP})
    root.value.foo = root.createChildNodeFromJS(testcase)
    const expected = {foo: testcase}

    expect(root.toJS()).toEqual(expected)
  })

  it('reset()', async () => {
    const testcase = {
      bar: 'bar',
      zed: {x: 'x'},
      arr: ['ok'],
    }
    const root = new FormNode({type: FormNode.types.MAP})
    root.value.foo = root.createChildNodeFromJS(testcase)
    const expected = {foo: {
      bar: undefined,
      zed: {
        x: undefined,
      },
      arr: [undefined],
    }}

    root.reset()
    expect(root.toJS()).toEqual(expected)
  })
})
