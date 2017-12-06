import {storiesOf} from '@storybook/react'
import { boolean, withKnobs, select } from '@storybook/addon-knobs'

import Button from './index.js'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Button
      show={boolean('show', true)}
      type={select('type', {error: 'error', positive: 'positive'})}
    >
      hi
    </Button>
  })
