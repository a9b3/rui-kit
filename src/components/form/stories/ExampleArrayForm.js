import PropTypes          from 'prop-types'
import React              from 'react'

import {
  FormFieldLayoutComponent,
  ruiForm,
  FormState,
  FormField,
  FormNode,
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
          path={'arr'}
          formFieldArgs={{ type: FormState.types.ARRAY }}
          render={({ formField }) => {
            return (
              <div>
                {formField.value.map((value, i) => {
                  return (
                    <div key={value.id}>
                      <FormField
                        path={`arr.${i}`}
                        formFieldArgs={{ type: FormState.types.VALUE }}
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

                      <button
                        type="button"
                        onClick={() => {
                          formField.value.remove(value)
                        }}
                      >
                        remove
                      </button>
                    </div>
                  )
                })}
                <button
                  type="button"
                  onClick={() =>
                    formField.value.push(
                      new FormNode({ type: FormState.types.VALUE }),
                    )
                  }
                >
                  Add
                </button>
              </div>
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
