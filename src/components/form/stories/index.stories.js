import { storiesOf }     from '@storybook/react'
import React             from 'react'

import ExampleForm       from './ExampleForm'
import ExampleSimpleForm from './ExampleSimpleForm'

storiesOf('Form', module)
  .add('default', () => (
    <div style={{ width: '500px' }}>
      <ExampleForm />
    </div>
  ))
  .add('simple', () => {
    return (
      <div style={{ width: '500px' }}>
        <ExampleSimpleForm />
      </div>
    )
  })
