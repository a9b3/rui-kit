import {storiesOf}                                      from '@storybook/react'
import React                                            from 'react'

import {ruiForm, Form, FormField, FormState, predicate} from '../index.js'

function Input({getInputProps, formField}) {
  return <div>
    {formField.validationError}
    {formField.modified && '*'}
    <label>Name</label>
    <input {...getInputProps()} placeholder='hi' />

    <button type='button' onClick={() => formField.reset()}>
      Reset
    </button>
  </div>
}

@ruiForm
class ExampleForm extends React.Component {
  handleSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  render() {
    const {formState} = this.props

    return <Form
      onSubmit={this.handleSubmit}
    >
      {JSON.stringify(formState.validationError)}
      {formState.modified && 'form is modified'}

      <FormField
        path={'name'}
        type={FormState.types.VALUE}
        formFieldArgs={{
          validate: value => predicate(value.length > 4, 'length must be higher than 4'),
        }}
        render={Input}
      />

      <FormField
        path={'info'}
        type={FormState.types.MAP}
        render={
          ({formField}) => {
            return <div>
              <FormField
                path={`${formField.path}.age`}
                type={FormState.types.VALUE}
                render={Input}
              />
            </div>
          }
        }
      />

      <FormField
        path={'hobbies'}
        type={FormState.types.ARRAY}
        formFieldArgs={{
          validate: value => { console.log('validate array', value) },
        }}
        render={({formField}) => {
          return <div>
            {formField.modified && 'array modified'}

            {formField.value.map((arrItem) => {
              return <FormField
                key={`${arrItem.path}`}
                path={`${arrItem.path}`}
                type={FormState.types.MAP}
                render={({formField: mapFormField}) => {
                  return <div>
                    <FormField
                      path={`${mapFormField.path}.name`}
                      type={FormState.types.VALUE}
                      render={Input}
                    />
                    <FormField
                      path={`${mapFormField.path}.years`}
                      type={FormState.types.VALUE}
                      render={Input}
                    />
                  </div>
                }}
              />
            })}
          </div>
        }}
      />

      <button type='button' onClick={() => formState.reset()}>reset</button>
      <button type='submit'>submit</button>
    </Form>
  }
}

storiesOf('Form3', module)
  .add('default', () => (
    <ExampleForm
      initialState={{
        name   : 'sam',
        hobbies: [
          {
            name : 'basketball',
            years: 5,
          },
        ],
        info: {
          age: 10,
        },
      }}
    />
  ))
