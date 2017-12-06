import {boolean, withKnobs, text} from '@storybook/addon-knobs'
import {storiesOf}                from '@storybook/react'
import React                      from 'react'

import HoverDisplay               from './index.js'

storiesOf('HoverDisplay', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <HoverDisplay />
  })
