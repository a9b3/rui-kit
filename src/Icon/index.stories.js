import { withKnobs }   from '@storybook/addon-knobs'
import { storiesOf }   from '@storybook/react'
import React           from 'react'

import Icon, { ICONS } from './index.js'

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <ul>
        {Object.keys(ICONS).map(type => (
          <li key={type}>
            <strong style={{ width: '500px' }}>{type}</strong>
            <Icon type={type} style={{ fill: 'blue' }} />
          </li>
        ))}
      </ul>
    )
  })
