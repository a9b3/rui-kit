import expect       from 'expect'
import sinon        from 'sinon'

import { FormNode } from './FormState2.js'

describe('FormNode', () => {
  describe('validationError', () => {
    it('single level', async () => {
      const formNode = new FormNode({ validate: () => 'foo' })
      expect(formNode.validationError).toBe('foo')
    })

    it('multiple siblings no error', async () => {
      const formNode = new FormNode({
        value: {
          foo: new FormNode(),
          bar: new FormNode(),
        },
      })
      expect(formNode.validationError).toBe(false)
    })

    it('multiple siblings with error', async () => {
      const formNode = new FormNode({
        value: {
          foo: new FormNode({ validate: () => 'foo' }),
          bar: new FormNode(),
        },
      })
      expect(formNode.validationError).toBe(true)
    })

    it('multiple children', async () => {
      const formNode = new FormNode({
        value: {
          foo: new FormNode(),
          bar: new FormNode({
            value: [new FormNode()],
          }),
          zed: new FormNode({
            value: {
              zedFoo: new FormNode(),
            },
          }),
        },
      })
      expect(formNode.validationError).toBe(false)
    })

    it('multiple children with error', async () => {
      const formNode = new FormNode({
        value: {
          foo: new FormNode(),
          bar: new FormNode({
            value: [new FormNode({ validate: () => 'foo' })],
          }),
          zed: new FormNode({
            value: {
              zedFoo: new FormNode(),
            },
          }),
        },
      })
      expect(formNode.validationError).toBe(true)
    })

    it('validate should work', async () => {
      const formNode = new FormNode({
        validate: (value = '') => value.length > 3 && 'what',
      })
      expect(formNode.validationError).toBe(false)
      formNode.value = 'hello'
      expect(formNode.validationError).toBe('what')
    })

    it('validate should get passed toJS object', async () => {
      const validateSpy = sinon.spy()
      const formNode = new FormNode({
        validate: validateSpy,
        value: {
          foo: new FormNode({ value: 'foo' }),
          bar: new FormNode({
            value: [new FormNode({ value: 'bar.0' })],
          }),
          zed: new FormNode({
            value: { zedFoo: new FormNode({ value: 'zed.zedFoo' }) },
          }),
        },
      })
      expect(formNode.validationError).toBe(undefined)
      expect(validateSpy.calledOnce).toBe(true)
      expect(validateSpy.calledWith(formNode.toJS())).toBe(true)
    })
  })

  describe('modified', () => {
    it('single level', async () => {
      const formNode = new FormNode({ value: 'foo' })
      expect(formNode.modified).toBe(false)
      formNode.value = 'bar'
      expect(formNode.modified).toBe(true)
    })

    it('multiple level', async () => {
      const formNode = new FormNode({
        value: {
          foo: new FormNode({ value: 'foo' }),
          bar: new FormNode({ value: 'bar' }),
        },
      })
      expect(formNode.modified).toBe(false)

      formNode.value.foo.value = 'food'
      expect(formNode.modified).toBe(true)
    })
  })

  describe('toJS', () => {
    it('single level', async () => {
      const formNode = new FormNode({ value: 'foo' })
      expect(formNode.toJS()).toEqual('foo')
    })

    it('multiple siblings', async () => {
      const formNode = new FormNode({
        value: {
          foo: new FormNode({ value: 'foo' }),
          bar: new FormNode({ value: 'bar' }),
        },
      })
      expect(formNode.toJS()).toEqual({
        foo: 'foo',
        bar: 'bar',
      })
    })

    it('multiple children', async () => {
      const formNode = new FormNode({
        value: {
          foo: new FormNode({ value: 'foo' }),
          bar: new FormNode({
            value: [new FormNode({ value: 'bar.0' })],
          }),
          zed: new FormNode({
            value: { zedFoo: new FormNode({ value: 'zed.zedFoo' }) },
          }),
        },
      })
      expect(formNode.toJS()).toEqual({
        foo: 'foo',
        bar: ['bar.0'],
        zed: {
          zedFoo: 'zed.zedFoo',
        },
      })
    })
  })

  describe('reset', () => {
    it('single level', async () => {
      const formNode = new FormNode({ value: 'foo' })
      formNode.value = 'food'
      expect(formNode.toJS()).toEqual('food')
      formNode.reset()
      expect(formNode.toJS()).toEqual('foo')
    })

    it('multiple children', async () => {
      const formNode = new FormNode({
        value: {
          foo: new FormNode({ value: 'foo' }),
          bar: new FormNode({
            value: [new FormNode({ value: 'bar.0' })],
          }),
          zed: new FormNode({
            value: { zedFoo: new FormNode({ value: 'zed.zedFoo' }) },
          }),
        },
      })

      formNode.value.foo.value = 'bar'
      expect(formNode.toJS()).toEqual({
        foo: 'bar',
        bar: ['bar.0'],
        zed: {
          zedFoo: 'zed.zedFoo',
        },
      })

      formNode.reset()
      expect(formNode.toJS()).toEqual({
        foo: 'foo',
        bar: ['bar.0'],
        zed: {
          zedFoo: 'zed.zedFoo',
        },
      })
    })
  })
})
