import expect from 'expect'

timport { FormState, FormNode } from './FormState2.js'

describe('FormState', () => {
  it('cool', async () => {
    const root = new FormState({
      value: {
        foo: new FormNode
      }
    })
  })
})
