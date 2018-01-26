import jsxToString from 'jsx-to-string'
import React       from 'react'

import { Button }  from '../../../../src'
import Example     from 'components/Example'

const samples = [
  <Button>hi</Button>,
  <Button type={'outline'}>hi</Button>,
  <Button onClick={() => new Promise(resolve => setTimeout(resolve, 1000))}>
    Click
  </Button>,
].map(demo => {
  return { code: jsxToString(demo), demo, type: 'html' }
})

export default function ButtonView() {
  return (
    <Example
      samples={samples}
      info={{
        title: 'Button',
        description:
          'A button component that has state. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio volutpat sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio volutpat sit amet.',
      }}
    />
  )
}
