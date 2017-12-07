import {withKnobs, text} from '@storybook/addon-knobs'
import {storiesOf}       from '@storybook/react'

import FormField         from './FormField.js'
import FormState         from './FormState.js'
import FormFieldState    from './FormStateField.js'

const formState = new FormState({
  fields: {
    name: {
      validate: (value, allValue) => {
        if (value.length === 0) {
          return 'No value length'
        }
      },
    },
  },
})

storiesOf('FormField', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <FormField
      component={({value, onChange, error}) => {
        return <div>
          {error}
          <input
            type='text'
            onChange={onChange}
            value={value}
            placeholder={'Enter text...'}
          />
        </div>
      }}
      name={'name'}
      formState={formState}
    />
  })
