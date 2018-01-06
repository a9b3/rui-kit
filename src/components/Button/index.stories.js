import {
  withKnobs,
  select,
  text,
  boolean,
}                     from '@storybook/addon-knobs'
import {storiesOf}    from '@storybook/react'

import Button         from './index.js'
import {timeoutAsync} from '~/utils/testHelpers'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <div className={'rui'}>
      <Button
        type={select('type', {filled: 'filled', outline: 'outline'})}
        rgb={text('rgb', '')}
        href={text('href', '')}
        onClick={() => timeoutAsync(1000)}
        disabled={boolean('disabled', false)}
      >
        {text('children', 'Hello World')}
      </Button>
    </div>
  })
