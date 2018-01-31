import PropTypes          from 'prop-types'
import React              from 'react'

import {
  FormFieldLayoutComponent,
  ruiForm,
  FormState,
  FormField,
  predicate,
}                         from '../index.js'

@ruiForm()
export default class ExampleSimpleForm extends React.Component {
  static propTypes = {
    formState: PropTypes.object,
  }

  handleSubmit = data => {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(data))
        resolve()
      }, 2000)
    })
  }

  render() {
    const { formState } = this.props
    return (
      <form onSubmit={formState.callOnSubmit(this.handleSubmit)}>
        {formState.submitting && 'submitting'}
        {formState.submitError && 'submit Error'}
        {formState.validationError && 'has validation error'}
        {formState.modified && 'form is modified'}
        <FormField
          path={'name'}
          formFieldArgs={{
            type: FormState.types.VALUE,
            initialValue: 'o',
            validate: (value = '') =>
              predicate(value.length > 2, 'value must be higher than 2'),
          }}
          render={({ formField, getInputProps }) => {
            return (
              <FormFieldLayoutComponent
                modified={formField.modified}
                error={formField.validationError}
                label={'Name'}
                path={'name'}
                formFieldComponentProps={{
                  ...getInputProps(),
                  placeholder: 'Enter Name',
                }}
              />
            )
          }}
        />
        <FormField
          path={'last'}
          formFieldArgs={{
            type: FormState.types.VALUE,
            validate: (value = '') =>
              predicate(value.length > 2, 'value must be higher than 2'),
          }}
          render={({ formField, getInputProps }) => {
            return (
              <FormFieldLayoutComponent
                modified={formField.modified}
                error={formField.validationError}
                label={'Last'}
                path={'last'}
                formFieldComponentProps={{
                  ...getInputProps(),
                  placeholder: 'Enter Last',
                }}
              />
            )
          }}
        />
        <button type="button" onClick={() => formState.reset()}>
          reset
        </button>
        <button type="submit">submit</button>
      </form>
    )
  }
}
