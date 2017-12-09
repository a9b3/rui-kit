import {withKnobs, select} from '@storybook/addon-knobs'
import {storiesOf}         from '@storybook/react'
import PropTypes           from 'prop-types'
import React               from 'react'

import {
  Form,
  FormField,
  FormFieldLayoutComponent,
  FormFieldComponent,
  FormState,
  predicate,
  ruiForm,
}                          from '../index.js'

@ruiForm({
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
        name   : 'Hello',
        checked: false,
      }}
      onSubmit={this.handleSubmit}
    >
      {isFormModified && 'form is modified'}
      {!isFormValid && 'form is invalid'}
      {error}
      <FormField
        name={'name'}
        render={({getFormFieldProps}) => {
          return <FormFieldLayoutComponent
            {...getFormFieldProps({
              label: 'Name',
              field: <FormFieldComponent formElementType='input'/>,
            })}
          />
        }}
      />
      <FormField
        name={'checked'}
        render={({getFormFieldProps}) => {
          return <FormFieldLayoutComponent
            {...getFormFieldProps({
              label: 'Checked',
              field: <FormFieldComponent formElementType='input' type='checkbox'/>,
            })}
          />
        }}
      />
      <FormField
        name={'bio'}
        render={({getFormFieldProps}) => {
          return <FormFieldLayoutComponent
            {...getFormFieldProps({
              label: 'Bio',
              field: <FormFieldComponent formElementType='textarea' />,
            })}
          />
        }}
      />
      <FormField
        name={'state'}
        render={({getFormFieldProps}) => {
          return <FormFieldLayoutComponent
            {...getFormFieldProps({
              label: 'State',
              field: <FormFieldComponent formElementType='select' options={[
                {label: 'on', value: 'on'},
              ]}/>,
            })}
          />
        }}
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
