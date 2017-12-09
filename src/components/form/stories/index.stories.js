import {withKnobs, select} from '@storybook/addon-knobs'
import {storiesOf}         from '@storybook/react'
import {observer}          from 'mobx-react'
import PropTypes           from 'prop-types'
import React               from 'react'

import {
  Form,
  FormField,
  FormFieldComponent,
  FormFieldLayoutComponent,
  FormState,
  predicate,
}                          from '../index.js'

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
    const {isFormModified, isFormValid, error, loading} = formState

    return <Form
      onSubmit={this.handleSubmit}
      formState={formState}
      style={{width: '200px'}}
    >
      {isFormModified && 'form is modified'}
      {!isFormValid && 'form is invalid'}
      {error}
      <FormField
        name={'name'}
        formState={formState}
        formFieldLayoutComponentProps={{
          label: 'Name',
        }}
        formFieldComponentProps={{
          formElementType: 'input',
          type           : 'text',
          placeholder    : 'hi',
        }}
      />
      <FormField
        name={'state'}
        formState={formState}
        formFieldLayoutComponentProps={{
          label: 'State',
        }}
        formFieldComponentProps={{
          formElementType: 'select',
          options        : [
            {label: 'On', value: 'on'},
            {label: 'Off', value: 'off'},
          ],
        }}
      />
      <FormField
        name={'bio'}
        formState={formState}
        formFieldLayoutComponentProps={{
          label: 'Bio',
        }}
        formFieldComponentProps={{
          formElementType: 'textarea',
        }}
      />
      <FormField
        name={'checked'}
        formState={formState}
        formFieldLayoutComponentProps={{
          label: 'Checked',
        }}
        formFieldComponentProps={{
          formElementType: 'input',
          type           : 'checkbox',
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
    const formState = new FormState({
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
    return <ExampleForm formState={formState}/>
  })
