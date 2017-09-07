import React from 'react'
import {
  Form,
  FormState,
  FormField,
  FormFieldError,
} from '../../../src'

export default class FormExample extends React.Component {
  formState = new FormState({
    validators: {
      email: (value = '') => {
        if (value.length <= 0) {
          throw new Error('Cannot be empty')
        }
        return true
      },
      password: () => {
        return true
      },
      confirmPassword: (value = '', allValues = {}) => {
        if (value !== (allValues.password || '')) {
          throw new Error('Must be the same as password')
        }
        return true
      },
    },
  })

  handleSubmit = () => {
    const {email, password} = this.formState.getAllFormDataValues()
    // do something with the values
  }

  render() {
    return <Form
      formState={this.formState}
      style={{ display: 'block', margin: '1rem 0', border: '1px solid black' }}
    >
      <FormField
        formState={this.formState}
        formFieldKey={'email'}
        placeholder={'email'}
        style={{ display: 'block', margin: '1rem 0', border: '1px solid black' }}
      />
      <FormFieldError
        formState={this.formState}
        formFieldKey={'email'}
      />

      <FormField
        type='password'
        formState={this.formState}
        formFieldKey={'password'}
        placeholder={'password'}
        style={{ display: 'block', margin: '1rem 0', border: '1px solid black' }}
      />
      <FormFieldError
        formState={this.formState}
        formFieldKey={'password'}
      />

      <FormField
        type='password'
        formState={this.formState}
        formFieldKey={'confirmPassword'}
        placeholder={'Confirm Password'}
        style={{ display: 'block', margin: '1rem 0', border: '1px solid black' }}
      />
      <FormFieldError
        formState={this.formState}
        formFieldKey={'confirmPassword'}
      />

      <button
        disabled={!this.formState.isFormValid}
      >
        Submit
      </button>
    </Form>
  }
}
