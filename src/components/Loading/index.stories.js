import { boolean, withKnobs, text } from '@storybook/addon-knobs'
import { storiesOf }                from '@storybook/react'
import React                        from 'react'

import Loading                      from './index.js'

storiesOf('Loading', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Loading show={boolean('show', true)} rgb={text('rgb', '')} />
  })
