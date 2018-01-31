import expect         from 'expect'
import { observable } from 'mobx'
import sinon          from 'sinon'

import FormNode       from './FormNode.js'

describe('FormNode', () => {
  describe('validationError', () => {
    it('simple tree', async () => {
      const validateStub = sinon.stub().returns('hi')
      const formNode = new FormNode({
        type: FormNode.types.VALUE,
        value: '',
        validate: validateStub,
      })

      expect(formNode.validationError).toBe('hi')
      expect(validateStub.calledOnce).toBe(true)
      expect(validateStub.calledWith('')).toBe(true)
    })
  })
})
