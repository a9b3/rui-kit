import React  from 'react'
import expect from 'expect'
import {
  shallow,
  mount,
}             from 'enzyme'
import Button from './index.js'

describe('write tests', () => {
  it('render dom without a problems', () => {
    const root = shallow(<div />)
    expect(root.find('div').length).toBe(1)
  })

  it('test components with enzyme', () => {
    const wrapper = mount(<Button />)
  })
})
