import { storiesOf }     from '@storybook/react'
import React             from 'react'

import ExampleSimpleForm from './ExampleSimpleForm'

storiesOf('Form', module).add('simple', () => {
  return (
    <div style={{ width: '500px', background: 'blue' }}>
      <ExampleSimpleForm />
    </div>
  )
})
