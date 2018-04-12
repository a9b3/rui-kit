import React from 'react'

import ExampleFormStr from '!raw-loader!../../../../src/components/form/stories/ExampleSimpleForm.js'
import Example from 'components/Example'
import ExampleForm from 'components/form/stories/ExampleSimpleForm.js'

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
