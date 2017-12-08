import {withKnobs, select} from '@storybook/addon-knobs'
import {storiesOf}         from '@storybook/react'
import {observer}          from 'mobx-react'
import PropTypes           from 'prop-types'
import React               from 'react'

import {
  FormState,
  FormField,
  Form,
  createFormFieldComponent,
  predicate,
}                          from '../index.js'

const NameField = createFormFieldComponent({
  formElementType: 'input',
  attr           : {placeholder: 'Enter text...'},
  Layout         : ({error, modified, formElement}) => {
    return <div>
      {error}
      {modified && '*'}
      {formElement}
    </div>
  },
})

const PasswordField = createFormFieldComponent({
  formElementType: 'input',
  attr           : {type: 'password', placeholder: 'Enter text...'},
  Layout         : ({error, modified, formElement}) => {
    return <div>
      {error}
      {modified && '*'}
      {formElement}
    </div>
  },
})

@observer
class ExampleForm extends React.Component {
  static propTypes = {
    formState: PropTypes.instanceOf(FormState).isRequired,
  }

  handleSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  render() {
    const {formState} = this.props
    const {isFormValid, error, loading} = formState

    return <Form
      onSubmit={this.handleSubmit}
      formState={formState}
    >
      {!isFormValid && 'form is invalid'}
      {error}
      <FormField
        name={'name'}
        formState={formState}
        component={NameField}
      />
      <FormField
        name={'password'}
        formState={formState}
        component={PasswordField}
      />
      <FormField
        name={'confirmPassword'}
        formState={formState}
        component={PasswordField}
      />
      <button disabled={loading || !isFormValid}>
        Submit
      </button>
    </Form>
  }
}

storiesOf('Form', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const formState = new FormState({
      fields: {
        name: {
          validate: (...args) => [
            predicate((value) => value.length > 3, `value must be length 3`),
            predicate((value) => value !== 'sam', `value cannot be the word 'sam'`),
          ].map(fn => fn(...args)).filter(Boolean).join(', '),
        },
        password: {
          validate: predicate((value, all) => value === all.confirmPassword, `password must match`),
        },
        confirmPassword: {
          validate: predicate((value, all) => value === all.password, `password must match`),
        },
      },
    })
    return <ExampleForm formState={formState}/>
  })
