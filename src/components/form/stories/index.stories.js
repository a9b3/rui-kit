import {withKnobs, select} from '@storybook/addon-knobs'
import {storiesOf}         from '@storybook/react'
import PropTypes           from 'prop-types'
import React               from 'react'

import {
  Form,
  FormFieldComponent,
  FormFieldLayoutComponent,
  FormState,
  predicate,
  withFormState,
}                          from '../index.js'

@withFormState({
  fields: {
    checked: {},
    state  : {},
    bio    : {},
    name   : {
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
class ExampleForm extends React.Component {
  static propTypes = {
    formState: PropTypes.instanceOf(FormState).isRequired,
  }

  handleSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  render() {
    const {formState} = this.props
    const {isFormModified, isFormValid, error, loading} = formState

    return <Form
      initialValues={{
        name: 'Hello',
      }}
      onSubmit={this.handleSubmit}
      formState={formState}
    >
      {isFormModified && 'form is modified'}
      {!isFormValid && 'form is invalid'}
      {error}

      <Form.FormField
        name={'name'}
        layout={<FormFieldLayoutComponent label={'Name'} />}
        field={<FormFieldComponent
          formElementType='input'
        />}
      />
      <Form.FormField
        name={'checked'}
        layout={<FormFieldLayoutComponent label={'Checked'} />}
        field={<FormFieldComponent
          formElementType='input'
          type='checkbox'
        />}
      />
      <Form.FormField
        name={'bio'}
        layout={<FormFieldLayoutComponent label={'Bio'} />}
        field={<FormFieldComponent
          formElementType='textarea'
        />}
      />
      <Form.FormField
        name={'state'}
        layout={<FormFieldLayoutComponent label={'State'} />}
        field={<FormFieldComponent
          formElementType='select'
          options={[
            {label: 'on', value: 'on'},
          ]}
        />}
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
    return <ExampleForm />
  })
