import {storiesOf} from '@storybook/react'
import React       from 'react'

@withFormState
export default class FormField extends React.Component {
  formNode = undefined

  static propTypes = {
    type             : PropTypes.string,
    validate         : PropTypes.func,
    calculateModified: PropTypes.func,
    path             : PropTypes.string,
    formState        : PropTypes.object,
  }

  componentWillMount() {
    const {formState, path, type, validate, calculateModified} = this.props
    this.formNode = formState.create({path, constructorArgs: {type, validate, calculateModified}})
  }

  componentWillUnmount() {
    const {formState, path} = this.props
    formState.remove({path})
  }

  componentWillUpdate(nextProps) {
    this.formNode.setInstanceVariables({
      validate         : nextProps.validate,
      calculateModified: nextProps.calculateModified,
    })
  }

  handleChange = (event) => {
    this.formNode.setValue(
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    )
  }

  getInputProps = ({onChange, ...props}) => {
    return {
      onChange: compose(onChange, this.handleChange),
      ...props,
    }
  }

  render() {
    const {render} = this.props
    return render({
      getInputProps: this.getInputProps,
    })
  }
}

@ruiForm({
  schema: {
    bar: {
      initialValue: 'hi',
      validate    : () => {

      },
    },
  },
})
class ExampleForm extends React.Component {
  handleSubmit = (data) => {

  }

  render() {
    return <Form
      initialState={{
        name: 'sam',
        hobbies: [
          {
            name: 'basketball',
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
          validate: (value) => {
            return 'hi'
          },
          calculateModified: (value) => value === 'something',
        }}
        render={({getInputProps}) => {
          return <input {...getInputProps()} />
        }}
      />
      <FormField
        path={'arr'}
        type={FormState.types.ARRAY}
        render={({formField}) => {
          return <div>
            {
              formField.value.map(child => {
                return <div>
                  <FormField
                    name={`arr.${i}.name`}
                    formFieldArgs={{
                      validate: (value) => {

                      },
                    }}
                    render={({getInputProps}) => {
                      return <input {...getInputProps()}/>
                    }}
                  />
                </div>
              })
            }

            <button onClick={() => {
              formField.value.push(formState.createNode({
                name: 'sam',
                age : 15,
              }))
            }}>Add</button>

            <FormField
              path={'_temp'}
              type={FormState.types.MAP}
              render={() => {
                return <div>
                  <FormField
                    path={'_temp.test'}
                  />
                </div>
              }}
            />
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
