import PropTypes from 'prop-types'
import React     from 'react'

import { form }  from '../../../../src'

const {
  ruiForm,
  Form,
  FormField,
  FormState,
  FormFieldLayoutComponent,
  predicate,
} = form

@ruiForm
export default class ExampleForm extends React.Component {
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
          formFieldArgs={{
            validate: (value = '') =>
              predicate(value.length > 4, 'length must be higher than 4'),
          }}
          renderProps={{
            label: 'Name',
            formFieldComponentProps: {
              formElementType: 'input',
            },
          }}
          render={FormFieldLayoutComponent}
        />

        <FormField
          path={'bio'}
          type={FormState.types.VALUE}
          formFieldArgs={{
            validate: (value = '') =>
              predicate(value.length > 4, 'length must be higher than 4'),
          }}
          renderProps={{
            label: 'Bio',
            formFieldComponentProps: {
              formElementType: 'textarea',
            },
          }}
          render={FormFieldLayoutComponent}
        />

        <FormField
          path={'race'}
          type={FormState.types.VALUE}
          formFieldArgs={{
            validate: (value = '') =>
              predicate(value.length > 4, 'length must be higher than 4'),
          }}
          renderProps={{
            label: 'Race',
            formFieldComponentProps: {
              formElementType: 'select',
              options: [
                { label: 'Mickey', value: 'mickey' },
                { label: 'Donald', value: 'donald' },
              ],
            },
          }}
          render={FormFieldLayoutComponent}
        />

        <FormField
          path={'info'}
          type={FormState.types.MAP}
          render={({ formField }) => (
            <div>
              <FormField
                path={`info.age`}
                type={FormState.types.VALUE}
                renderProps={{
                  label: 'Age',
                  formFieldComponentProps: {
                    formElementType: 'textarea',
                  },
                }}
                render={FormFieldLayoutComponent}
              />
            </div>
          )}
        />

        <FormField
          path={'hobbies'}
          type={FormState.types.ARRAY}
          formFieldArgs={{
            validate: (value = '') => {
              console.log('validate array', value)
            },
          }}
          render={({ formField }) => {
            return (
              <div>
                {formField.modified && 'array modified'}

                {formField.value.map((arrItem, index) => {
                  return (
                    <FormField
                      key={`hobbies.${index}`}
                      path={`hobbies.${index}`}
                      type={FormState.types.MAP}
                      formFieldArgs={{
                        validate: (value = '') => {
                          console.log(value)
                        },
                      }}
                      render={({ formField: mapFormField }) => {
                        return (
                          <div>
                            <FormField
                              path={`hobbies.${index}.name`}
                              type={FormState.types.VALUE}
                              formFieldArgs={{
                                initialValue: 'sam',
                              }}
                              renderProps={{
                                label: 'Name',
                                formFieldComponentProps: {
                                  formElementType: 'input',
                                },
                              }}
                              render={FormFieldLayoutComponent}
                            />
                            <FormField
                              path={`hobbies.${index}.years`}
                              type={FormState.types.VALUE}
                              renderProps={{
                                label: 'Years',
                                formFieldComponentProps: {
                                  formElementType: 'input',
                                },
                              }}
                              render={FormFieldLayoutComponent}
                            />
                            <button
                              type="button"
                              onClick={() => {
                                formField.value.splice(index, 1)
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        )
                      }}
                    />
                  )
                })}

                <button
                  type="button"
                  onClick={() => {
                    formField.value.push(
                      formField.createChildNode({
                        type: FormState.types.MAP,
                      }),
                    )
                  }}
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
      </Form>
    )
  }
}
