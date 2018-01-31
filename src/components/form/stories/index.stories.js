import { storiesOf }     from '@storybook/react'
import React             from 'react'

import ExampleArrayForm  from './ExampleArrayForm'
import ExampleSimpleForm from './ExampleSimpleForm'

storiesOf('Form', module)
  .add('simple', () => {
    return (
      <div style={{ width: '500px' }}>
        <ExampleSimpleForm />
      </div>
    )
  })
  .add('array', () => {
    return (
      <div style={{ width: '500px' }}>
        <ExampleArrayForm />
      </div>
    )
  })
