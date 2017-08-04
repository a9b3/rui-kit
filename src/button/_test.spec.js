import React         from 'react'
import {
  mount,
}                    from 'enzyme'
import TestComponent from './index.js'

describe('write tests', () => {
  it('test components with enzyme', () => {
    mount(<TestComponent />)
  })
})
