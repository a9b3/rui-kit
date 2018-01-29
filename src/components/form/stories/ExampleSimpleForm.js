import PropTypes          from 'prop-types'
import React              from 'react'

import {
  ruiForm,
  Form,
  FormField,
  FormState,
  FormFieldLayoutComponent,
  predicate,
}                         from '../index.js'

@ruiForm()
export default class ExampleSimpleForm extends React.Component {
  static propTypes = {
    formState: PropTypes.object,
  }

  handleSubmit = data => {
    alert(JSON.stringify(data))
  }

  render() {
    const { formState } = this.props

    return (
      <Form onSubmit={this.handleSubmit}>
        {JSON.stringify(formState.validationError)}
        {formState.modified && 'form is modified'}

        <FormField
          path={'name'}
          type={FormState.types.VALUE}
          renderProps={{
            label: 'Name',
            formFieldComponentProps: { formElementType: 'input' },
          }}
          render={FormFieldLayoutComponent}
        />

        <button type="button" onClick={() => formState.reset()}>
          reset
        </button>
        <button type="submit">submit</button>
      </Form>
    )
  }
}
