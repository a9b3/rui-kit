import {storiesOf} from '@storybook/react'

import Alert from './index.js'

storiesOf('Alert', module)
  .add('default', () => {
    return <Alert
      show
    >
      hi
    </Alert>
  })
