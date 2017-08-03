import {
  ThemedForm,
  FormState,
  ThemedFormField,
  Button,
} from '../../src'
import variables from 'esayemm-styles/variables'

class FormExample extends React.Component {
  state = {
    formState: null,
  }

  componentWillMount() {
    const formState = new FormState({
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
        boxShadow : '0 5px 15px #090909',
        paddingTop: '1rem',
      }}
    >
      <ThemedFormField
        label={'email'}
        style={{display: 'block'}}
        formState={formState}
        formFieldKey={'email'}
        placeholder={'email'}
      />
      <ThemedFormField
        label={'Password'}
        style={{display: 'block'}}
        formState={formState}
        formFieldKey={'password'}
        placeholder={'password'}
      />
      <ThemedFormField
        label={'Confirm Password'}
        style={{display: 'block'}}
        formState={formState}
        formFieldKey={'confirmPassword'}
        placeholder={'Confirm Password'}
      />

      <Button
        style={{ width: '100%', borderRadius: '0', marginTop: '1rem' }}
        color={variables.green3}
      >
      Submit
      </Button>
    </ThemedForm>
  }
}

export default {
  display          : 'ThemedForm',
  to               : '/themed-form',
  demoComponentAttr: {
    header     : `<ThemedForm />`,
    description: 'A form with validation.',
    demos      : [
      <FormExample />,
    ],
    codeSnippetType: 'jsx',
    codeSnippet    : `
    `,
  },
}
