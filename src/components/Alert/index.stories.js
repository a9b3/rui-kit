import {storiesOf} from '@storybook/react'
import { boolean, withKnobs } from '@storybook/addon-knobs'

import Alert from './index.js'

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Alert
      show={boolean('show', true)}
    >
      hi
    </Alert>
  })
