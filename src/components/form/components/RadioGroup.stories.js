import {
  boolean,
  withKnobs,
  text,
}                  from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'
import React       from 'react'

import RadioGroup  from './RadioGroup.js'

function Foo(props) {
  return <div {...props}/>
}

storiesOf('RadioGroup', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <RadioGroup
      Component={'div'}
      style={{background: 'black'}}
    >
      Hello World
    </RadioGroup>
  })
