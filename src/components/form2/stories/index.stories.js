import {withKnobs, text}        from '@storybook/addon-knobs'
import {storiesOf}              from '@storybook/react'
import React                    from 'react'

import {Form, FormField, types} from '../index.js'

class ExampleForm extends React.Component {
  handleSubmit = (data) => {
    alert(JSON.stringify(data, '  '))
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormField
          path='name'
          type={types.VALUE}
          fieldArgs={{
            value: 'hi',
          }}
          render={
            ({getInputProps}) => {
              return <input {...getInputProps()} />
            }
          }
        />
        <FormField
          path='bar'
          type={types.ARRAY}
          render={
            ({formStateField}) => {
              return <FormField
                path='bar.0'
                type={types.VALUE}
                fieldArgs={{
                  value: 'bye',
                }}
                render={
                  ({getInputProps}) => <input {...getInputProps()} />
                }
              />
            }
          }
        />
        <button>Submit</button>
      </Form>
    )
  }
}

storiesOf('Form2', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <ExampleForm />
  })
