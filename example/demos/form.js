import React from 'react'
import {
  Form,
  FormState,
  FormField,
  FormFieldError,
} from '../../src'

class FormExample extends React.Component {
  state = {
    formState: null,
  }

  componentWillMount() {
    const formState = new FormState({
      validators: {
        email: (value) => {
          if (value.length <= 0) {
            throw new Error('Cannot be empty')
          }
          return true
        },
        password: () => {
          return true
        },
        confirmPassword: (value, allValues) => {
          if (value !== allValues.password) {
            throw new Error('Must be the same as password')
          }
          return true
        },
      },
    })
    this.setState({ formState })
  }

  render() {
    const {
      formState,
    } = this.state

    return <Form
      formState={formState}
      style={{ display: 'block', margin: '1rem 0', border: '1px solid black' }}
    >
      <FormField
        formState={formState}
        formFieldKey={'email'}
        placeholder={'email'}
        style={{ display: 'block', margin: '1rem 0', border: '1px solid black' }}
      />
      <FormFieldError
        formState={formState}
        formFieldKey={'email'}
      />
      <FormField
        type='password'
        formState={formState}
        formFieldKey={'password'}
        placeholder={'password'}
        style={{ display: 'block', margin: '1rem 0', border: '1px solid black' }}
      />
      <FormFieldError
        formState={formState}
        formFieldKey={'password'}
      />
      <FormField
        type='password'
        formState={formState}
        formFieldKey={'confirmPassword'}
        placeholder={'Confirm Password'}
        style={{ display: 'block', margin: '1rem 0', border: '1px solid black' }}
      />
      <FormFieldError
        formState={formState}
        formFieldKey={'confirmPassword'}
      />
      <button>Submit</button>
    </Form>
  }
}

export default {
  display          : 'Form',
  to               : '/form',
  demoComponentAttr: {
    header     : `<Form />`,
    description: 'A form with validation.',
    demos      : [
      <FormExample />,
    ],
    codeSnippetType: 'jsx',
    codeSnippet    : `
class FormExample extends React.Component {
  state = {
    formState: null,
  }

  componentWillMount() {
    const formState = new FormState({
      validators: {
        email: (value) => {
          if (value.length <= 0) {
            throw new Error('Cannot be empty')
          }
          return true
        },
        password: () => {
          return true
        },
        confirmPassword: (value, allValues) => {
          if (value !== allValues.password) {
            throw new Error('Must be the same as password')
          }
          return true
        },
      },
    })
    this.setState({ formState })
  }

  render() {
    const {
      formState,
    } = this.state

    return <Form
      formState={formState}
      style={{ display: 'block', margin: '1rem 0', border: '1px solid black' }}
    >
      <FormField
        formState={formState}
        formFieldKey={'email'}
        placeholder={'email'}
        style={{ display: 'block', margin: '1rem 0', border: '1px solid black' }}
      />
      <FormFieldError
        formState={formState}
        formFieldKey={'email'}
      />
      <FormField
        formState={formState}
        formFieldKey={'password'}
        placeholder={'password'}
        style={{ display: 'block', margin: '1rem 0', border: '1px solid black' }}
      />
      <FormFieldError
        formState={formState}
        formFieldKey={'password'}
      />
      <FormField
        formState={formState}
        formFieldKey={'confirmPassword'}
        placeholder={'Confirm Password'}
        style={{ display: 'block', margin: '1rem 0', border: '1px solid black' }}
      />
      <FormFieldError
        formState={formState}
        formFieldKey={'confirmPassword'}
      />
      <button>Submit</button>
    </Form>
  }
}
    `,
  },
}
