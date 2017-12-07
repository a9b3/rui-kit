import {withKnobs, text} from '@storybook/addon-knobs'
import {storiesOf}       from '@storybook/react'
import {observer}        from 'mobx-react'

import Form              from './Form.js'
import FormField         from './FormField.js'
import FormState         from './FormState.js'
import FormFieldState    from './FormStateField.js'

const validators = {
  name: (value, allValue) => {
    if (value.length === 0) {
      return 'No value length'
    }
  },
  password: (value, allValue) => {
    if (value.length < 6) {
      return `Length of password must be longer than 6`
    }
  },
}

const formState = new FormState({
  fields: {
    name: {
      initialValue: 'Sam',
      validate    : validators.name,
    },
    password: {
      initialValue: '123',
      validate    : validators.password,
    },
  },
})

@observer
class ExampleForm extends React.Component {
  handleSubmit = (values) => {
    alert(JSON.stringify(values))
  }

  render() {
    const {
      formState,
    } = this.props

    return <Form
      formState={formState}
      onSubmit={this.handleSubmit}
    >
      { formState.error && formState.error.message }
      <FormField
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
      <FormField
        component={({value, onChange, error}) => {
          return <div>
            {error}
            <input
              type='password'
              onChange={onChange}
              value={value}
              placeholder={'Enter text...'}
            />
          </div>
        }}
        name={'password'}
        formState={formState}
      />

      <button>Sok</button>
    </Form>
  }
}

storiesOf('Form', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <ExampleForm formState={formState}/>
  })
