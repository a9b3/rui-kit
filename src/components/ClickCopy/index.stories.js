import {withKnobs, text} from '@storybook/addon-knobs'
import {storiesOf}       from '@storybook/react'

import ClickCopy         from './index.js'

storiesOf('ClickCopy', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <div>
      <ClickCopy copyText={text('copyText', 'Hello World!')}>
        Click to copy
      </ClickCopy>
      <input type='text' placeholder='paste here' />
    </div>
  })
