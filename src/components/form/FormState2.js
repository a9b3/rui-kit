import hoistNonReactStatics from 'hoist-non-react-statics'
import { compose }          from 'lodash/fp'
import { observer }         from 'mobx-react'
import PropTypes            from 'prop-types'
import React                from 'react'

export class FormNode {
  validate = undefined
  value = undefined
  initialValue = undefined

  get validationError() {
    if (this.validate) {
      return this.validate(this.value)
    }
    if (typeof this.value === 'object') {
      return Object.entries(this.value).some((key, value) =>
        Boolean(value.validationError),
      )
    }
  }

  get modified() {
    if (typeof this.value === 'object') {
      return Object.entries(this.value).some((key, value) =>
        Boolean(value.modified),
      )
    }
    return this.value === this.initialValue
  }

  constructor({ value, validate } = {}) {
    this.value = value
    this.initialValue = value
    this.validate = validate
  }

  reset() {}

  toJS() {}
}

export class FormState extends FormNode {
  submitError = undefined

  submit() {}

  get() {}

  insert() {}
}

// passes down formNode
export default class FormField extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
    args: PropTypes.object,
  }

  static defaultProps = {
    args: {},
  }

  static contextTypes = {
    formState: PropTypes.object.isRequired,
  }

  componentWillMount() {
    const { name, args } = this.props
    const { formState } = this.context
    const formNode = formState.get(name) || formState.insert(name, args)
  }

  _handleChange = event => {
    const { formNode } = this.props
    formNode.setValue(
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value,
    )
  }

  getInputProps = ({ onChange }) => {
    const { formNode } = this.props
    return {
      onChange: compose(onChange, this._handleChange),
      value: formNode.value,
    }
  }

  render() {
    const { formNode, render } = this.props
    return render({ formNode, getInputProps: this.getInputProps })
  }
}

// passes down formState prop
export function ruiForm(formState) {
  return WrappedComponent => {
    const ObserverWrappedComponent = observer(WrappedComponent)

    class Wrapper extends React.Component {
      static displayName = `ruiForm(${WrappedComponent.displayName ||
        WrappedComponent.name})`

      static childContextTypes = {
        formState: PropTypes.instanceOf(FormState).isRequired,
      }

      getChildContext() {
        return { formState }
      }

      render() {
        return (
          <ObserverWrappedComponent {...this.props} formState={formState} />
        )
      }
    }

    return hoistNonReactStatics(Wrapper, ObserverWrappedComponent)
  }
}

/* ----------------- Use Case ----------------- */
// TODO handle
// - submit validation
// - field validation
// - dynamic array for fields
const formState = new FormState({
  validate: values => {
    if (values.firstName !== 'sam') {
      return 'Only sam can enter'
    }
    return null
  },
})
@ruiForm(formState)
export class Example extends React.Component {
  static propTypes = {
    formState: PropTypes.instanceOf(FormState).isRequired,
  }

  handleSubmit = () => {
    const { formState } = this.props
    formState.submit()
  }

  render() {
    const { formState } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        {formState.submitError}
        {formState.validationError}
        {formState.modified}
        <FormField
          name="firstName"
          initialValue="Sam"
          render={({ getInputProps }) => {
            return <input {...getInputProps()} />
          }}
        />
        <FormField
          args={{
            validate: values => {
              return null
            },
          }}
          name="hobbies"
          render={({ formNode }) => {
            return (
              <div>
                {formNode.values.map((formField, i) => {
                  <div>
                    <FormField
                      name={`hobbies.${i}.name`}
                      render={({ getInputProps }) => (
                        <input {...getInputProps()} />
                      )}
                    />
                    <FormField
                      name={`hobbies.${i}.info`}
                      render={({ getInputProps }) => (
                        <input {...getInputProps()} />
                      )}
                    />
                    <button onClick={() => formNode.remove(i)}>Remove</button>
                  </div>
                })}
                <button onClick={() => formNode.add()}>Add</button>
              </div>
            )
          }}
        />
        <button type="submit" disabled={formState.validationError}>
          Submit
        </button>
        <button onClick={formState.reset}>Reset</button>
      </form>
    )
  }
}
