import {storiesOf}                             from '@storybook/react'
import React                                   from 'react'

import {Form, FormField, FormState, predicate} from '../index.js'

class ExampleForm extends React.Component {
  handleSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  render() {
    return <Form
      onSubmit={this.handleSubmit}
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
    >
      <FormField
        path={'name'}
        type={FormState.types.VALUE}
        formFieldArgs={{
          validate: value => predicate(value.length > 4, 'length must be higher than 4'),
        }}
        render={({getInputProps, formField}) => {
          return <div>
            {formField.validationError}
            {formField.modified && '*'}
            <label>Name</label>
            <input {...getInputProps()} placeholder='hi' />

            <button type='button' onClick={() => formField.reset()}>
              Reset
            </button>
          </div>
        }}
      />

      <FormField
        path={'hobbies'}
        type={FormState.types.ARRAY}
        formFieldArgs={{
          validate: value => { console.log('validate array', value) },
        }}
        render={({formField}) => {
          console.log('formfield arr', formField)
          return <div>
            {formField.modified && 'array modified'}

            {formField.value.map((f, i) => {
              return <FormField
                path={`${f.path}.${i}`}
                type={FormState.types.MAP}
                render={({formField}) => {
                  return <div>
                  </div>
                }}
              />
            })}
          </div>
        }}
      />
    </Form>
  }
}

storiesOf('Form3', module)
  .add('default', () => (
    <ExampleForm />
  ))
