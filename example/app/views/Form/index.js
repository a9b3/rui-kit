import React          from 'react'

import ExampleFormStr from '!raw-loader!./ExampleForm.js'
import ExampleForm    from './ExampleForm'
import Example        from 'components/Example'

console.log(ExampleFormStr)

export default function FormView() {
  return (
    <Example
      samples={[
        {
          code: ExampleFormStr,
          demo: <ExampleForm />,
          type: 'jsx',
        },
      ]}
      info={{
        title: 'Form',
        description: 'Wrap code to display in formatted',
      }}
    />
  )
}
