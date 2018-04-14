import { boolean, withKnobs, text } from '@storybook/addon-knobs'
import { storiesOf }                from '@storybook/react'
import React                        from 'react'

import LoadingOverlay               from './index.js'

storiesOf('LoadingOverlay', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <div
        style={{
          width: '100px',
          height: '100px',
          position: 'relative',
          border: '1px solid black',
        }}
      >
        <LoadingOverlay show={boolean('show', true)} rgb={text('rgb', '')} />
      </div>
    )
  })
