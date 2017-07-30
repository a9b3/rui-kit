import React from 'react'
import {
  Form,
  FormState,
  FormField,
} from '../../src'

class FormExample extends React.Component {
  state = {
    formState: null,
  }

  componentWillMount() {
    const formState = new FormState({
      validators: {
        email: (value, allValues) => {
          if (value.length <= 0) {
            throw new Error('hi')
          }
          return true
        },
        password: () => {
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
      <FormField
        formState={formState}
        formFieldKey={'password'}
        placeholder={'password'}
        style={{ display: 'block', margin: '1rem 0', border: '1px solid black' }}
      />
      <button>Submit</button>
    </Form>
  }
}

export default {
  display: 'Form',
  to: '/form',
  demoComponentAttr: {
    header: `<Form />`,
    description: 'A form with validation.',
    demos: [
      <FormExample />,
    ],
    codeSnippetType: 'jsx',
    codeSnippet: `
      class FormExample extends React.Component {
        state = {
          formState: null,
        }

        componentWillMount() {
          const formState = new FormState({
            validators: {
              email: (value, allValues) => {
                if (value.length <= 0) {
                  throw new Error('hi')
                }
                return true
              },
              password: () => {
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
            <FormField
              formState={formState}
              formFieldKey={'password'}
              placeholder={'password'}
              style={{ display: 'block', margin: '1rem 0', border: '1px solid black' }}
            />
            <button>Submit</button>
          </Form>
        }
      }
    `,
  },
}
