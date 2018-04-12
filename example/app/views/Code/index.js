import React from 'react'

import { Code } from '../../../../src'
import Example from 'components/Example'

export default function CodeView() {
  return (
    <Example
      samples={[
        {
          code: `<Code>hi</Code>`,
          demo: <Code>hi</Code>,
        },
      ]}
      info={{
        title: 'Code',
        description: 'Wrap code to display in formatted',
      }}
    />
  )
}
