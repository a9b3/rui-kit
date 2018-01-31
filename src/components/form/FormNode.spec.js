import expect         from 'expect'
import sinon          from 'sinon'

import FormNode       from './FormNode.js'

import { observable } from 'mobx'

const x = observable.map()
x.set('hi', 'hi')
console.log(x.values())

describe('FormNode', () => {
  describe('find()', () => {
    it('should work', async () => {
      const testcase = {
        bar: 'bar',
        zed: { x: 'x' },
        arr: ['ok'],
      }
      const root = new FormNode({ type: FormNode.types.MAP })
      root.value.foo = FormNode.createChildNodeFromJS(testcase)
      expect(root.find('foo.arr.0').toJS()).toBe('ok')
    })
  })

  describe('validationError', () => {
    it('map', () => {
      const validateStub = sinon.stub().returns('hi')
      const root = new FormNode({
        type: FormNode.types.MAP,
        value: {
          foo: new FormNode({
            type: FormNode.types.VALUE,
            value: 'foo',
            validate: validateStub,
          }),
        },
      })
      expect(root.validationError).toBe(true)
      expect(validateStub.calledOnce).toBe(true)
      expect(validateStub.calledWith('foo')).toBe(true)
    })

    it('complex tree', async () => {
      const validateStub = sinon.stub().returns('hi')
      const root = new FormNode({
        type: FormNode.types.MAP,
        value: {
          foo: new FormNode({
            type: FormNode.types.VALUE,
            value: 'foo',
          }),
          bar: new FormNode({
            type: FormNode.types.MAP,
            value: {
              bar: new FormNode({
                type: FormNode.types.VALUE,
                value: 'bar.bar',
              }),
            },
          }),
          zed: new FormNode({
            type: FormNode.types.ARRAY,
            value: [
              new FormNode({
                type: FormNode.types.VALUE,
                value: 'zed.0',
              }),
              new FormNode({
                validate: validateStub,
                type: FormNode.types.VALUE,
                value: 'zed.1',
              }),
            ],
          }),
        },
      })
      expect(root.validationError).toBe(true)
    })
  })

  describe('modified', () => {
    it('simple tree', async () => {
      const testcase = {
        bar: 'bar',
        zed: { x: 'x' },
        arr: ['ok'],
      }
      const root = FormNode.createChildNodeFromJS(testcase)
      expect(root.modified).toBe(false)
      root.value.bar.value = 'zed'
      expect(root.modified).toBe(true)
      root.value.bar.value = 'bar'
      expect(root.modified).toBe(false)
    })

    it('nested tree', async () => {
      const testcase = {
        bar: 'bar',
        zed: { x: 'x' },
        arr: ['ok'],
      }
      const root = FormNode.createChildNodeFromJS(testcase)
      expect(root.modified).toBe(false)
      root.value.zed.value.x.value = 'y'
      expect(root.modified).toBe(true)
      root.value.zed.value.x.value = 'x'
      expect(root.modified).toBe(false)
    })
  })

  it('createChildNodeFromJS()', async () => {
    const testcase = {
      bar: 'bar',
      zed: { x: 'x' },
      arr: ['ok'],
    }
    const root = FormNode.createChildNodeFromJS(testcase)
    expect(root.toJS()).toEqual(testcase)
  })

  it('reset()', async () => {
    const testcase = {
      bar: '',
      zed: { x: '' },
      arr: [''],
    }
    const root = FormNode.createChildNodeFromJS(testcase)
    root.value.bar.value = 'asd'
    expect(root.toJS()).not.toEqual(testcase)
    root.reset()
    expect(root.toJS()).toEqual(testcase)
  })
})
