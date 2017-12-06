import {withKnobs, select} from '@storybook/addon-knobs'
import {storiesOf}         from '@storybook/react'

import Icon, {ICONS}       from './index.js'

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Icon
      type={select(
        'type',
        Object.keys(ICONS),
        Object.keys(ICONS)[0],
      )}
    />
  })
