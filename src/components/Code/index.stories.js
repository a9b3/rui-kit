import {withKnobs, text} from '@storybook/addon-knobs'
import {storiesOf}       from '@storybook/react'

import Code              from './index.js'

storiesOf('Code', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Code type={text('type', 'js')}>
      {text('children', `const hello = 'world'`)}
    </Code>
  })
