import {withKnobs, text} from '@storybook/addon-knobs'
import {storiesOf}       from '@storybook/react'
import {observer}        from 'mobx-react'

import FormState         from '../FormState.js'
import FormFieldState    from '../FormStateField.js'
import {predicate}       from '../utils/validators.js'
import Form              from './Form.js'
import FormField         from './FormField.js'

const NameField = ({value, modified, error, onChange}) => {
  return <div>
    {error}
    {modified && '*'}
    <input
      type='text'
      onChange={onChange}
      value={value}
      placeholder={'Enter text...'}
    />
  </div>
}

const PasswordField = ({value, modified, error, onChange}) => {
  return <div>
    {error}
    {modified && '*'}
    <input
      type='password'
      onChange={onChange}
      value={value}
      placeholder={'Enter text...'}
    />
  </div>
}

@observer
class ExampleForm extends React.Component {
  handleSubmit = (values) => {
    throw new Error('OMG')
  }

  render() {
    const {formState} = this.props
    const {error: formError, loading} = formState

    return <form
      onSubmit={formState.submit}
    >
      form is {formState.isFormValid ? 'valid' : 'invalid'}
      { formError && formError.message }
      <FormField
        component={NameField}
        name={'name'}
        formState={formState}
      />
      <FormField
        component={PasswordField}
        name={'password'}
        formState={formState}
      />

      <button>Sok</button>
    </form>
  }
}

const formState = new FormState({
  fields: {
    name: {
      initialValue: 'Sam',
      validate    : predicate(value => value.length > 3, 'Length must be greater than 3'),
    },
    password: {
      initialValue: '123',
      validate    : predicate(value => value.length > 3, 'Length must be greater than 3'),
    },
  },
  submitFunc: () => {

  },
})

storiesOf('Form', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <ExampleForm formState={formState}/>
  })
