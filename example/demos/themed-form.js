import {
  ThemedForm,
  FormState,
  ThemedFormField,
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

    return <ThemedForm
      formState={formState}
      style={{
        border: '1px solid black',
        padding: '1rem',
      }}
    >
      <ThemedFormField
        formState={formState}
        formFieldKey={'email'}
        placeholder={'email'}
      />
      <ThemedFormField
        formState={formState}
        formFieldKey={'password'}
        placeholder={'password'}
      />
      <ThemedFormField
        formState={formState}
        formFieldKey={'confirmPassword'}
        placeholder={'Confirm Password'}
      />
      <button>Submit</button>
    </ThemedForm>
  }
}

export default {
  display: 'ThemedForm',
  to: '/themed-form',
  demoComponentAttr: {
    header: `<ThemedForm />`,
    description: 'A form with validation.',
    demos: [
      <FormExample />,
    ],
    codeSnippetType: 'jsx',
    codeSnippet: `
    `,
  },
}
