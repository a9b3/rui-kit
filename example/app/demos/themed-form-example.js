import styles           from './themed-form.scss'
import variables        from 'esayemm-styles/variables'

import {
  ThemedForm,
  FormState,
  ThemedFormField,
  ThemedFormSubmit,
  Alert,
}                       from '../../../src'

import { timeoutAsync } from '../helpers.js'

/* eslint-disable react/jsx-key */
export default class FormExample extends React.Component {
  state = {
    formState: null,
    formError: null,
    showAlert: false,
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
        bio: () => {
          return true
        },
      },
    })
    this.setState({ formState })
  }

  closeAlert = () => {
    this.setState({ showAlert: false })
  }

  handleSubmit = async () => {
    this.setState({ formError: null, showAlert: false })

    try {
      await timeoutAsync()
      throw new Error('hi')
    } catch (err) {
      this.setState({ formError: err, showAlert: true })
    }
  }

  render() {
    const {
      formState,
      formError,
      showAlert,
    } = this.state

    return <ThemedForm
      formState={formState}
    >
      <Alert show={showAlert} close={this.closeAlert}>{formError && formError.message}</Alert>
      <ThemedFormField
        className={styles['themed-form__field']}
        label={'email'}
        style={{display: 'block'}}
        formState={formState}
        formFieldKey={'email'}
        formFieldAttr={{
          placeholder: 'email',
        }}
      />
      <ThemedFormField
        className={styles['themed-form__field']}
        label={'Password'}
        style={{display: 'block'}}
        formState={formState}
        formFieldKey={'password'}
        formFieldAttr={{
          placeholder: 'Password',
          type       : 'password',
        }}
      />
      <ThemedFormField
        className={styles['themed-form__field']}
        label={'Confirm Password'}
        style={{display: 'block'}}
        formState={formState}
        formFieldKey={'confirmPassword'}
        formFieldAttr={{
          placeholder: 'Confirm Password',
          type       : 'password',
        }}
      />
      <ThemedFormField
        className={styles['themed-form__field']}
        label={'Bio'}
        style={{display: 'block'}}
        formState={formState}
        formFieldKey={'bio'}
        formFieldAttr={{
          placeholder: 'Bio',
          formType   : 'textarea',
          style      : {
            resize: 'none',
            height: '100px',
          },
        }}
      />

      <ThemedFormSubmit
        formState={formState}
        type='outline'
        style={{ width: '100%', marginTop: '1rem' }}
        color={variables.colors.green3}
        onClick={this.handleSubmit}
      >
      Submit
      </ThemedFormSubmit>
    </ThemedForm>
  }
}
