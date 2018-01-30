import hoistNonReactStatics             from 'hoist-non-react-statics'
import { compose }                      from 'lodash/fp'
import { computed, observable, action } from 'mobx'
import { observer }                     from 'mobx-react'
import PropTypes                        from 'prop-types'
import React                            from 'react'

export class FormNode {
  validate = undefined
  @observable value = undefined
  @observable initialValue = undefined

  @computed
  get validationError() {
    const value = this._getValue(this.value)
    if (this.validate) {
      return this.validate(this.toJS())
    }
    if (typeof value === 'object') {
      return Object.entries(value).some(([key, val]) =>
        Boolean(val.validationError),
      )
    }
  }

  @computed
  get modified() {
    const value = this._getValue(this.value)
    if (typeof value === 'object') {
      return Object.entries(value).some(([key, val]) => Boolean(val.modified))
    }
    return this.value !== this.initialValue
  }

  constructor({ value, validate } = {}) {
    this.value = value
    this.initialValue = value
    this.validate = validate
  }

  @action
  setValue = value => {
    this.value = value
  }

  reset = () => {
    const value = this._getValue(this.value)
    if (typeof value === 'object') {
      return Object.entries(value).forEach(([key, val]) => {
        val.reset()
      })
    }
    this.setValue(this.initialValue)
  }

  toJS = () => {
    const value = this._getValue(this.value)
    if (typeof value === 'object') {
      return Object.entries(value).reduce((data, [key, val]) => {
        data[key] = val.toJS()
        return data
      }, value.constructor())
    }
    return this.value
  }

  // super hacky to make observable array work
  _getValue(value) {
    return value && value.slice ? value.slice() : value
  }
}

export class FormState extends FormNode {
  @observable submitError = undefined
  @observable submitting = false

  @action
  async submit(fn) {
    this.submitError = undefined
    this.submitting = true
    let result
    try {
      result = await fn(this.toJS())
    } catch (err) {
      this.submitError = err
      return
    }
    this.submitting = false
    return result
  }

  // returns FormNode
  get(path) {
    const tokens = path.split('.')
    let node = this
    while (tokens.length) {
      const token = tokens.shift()
      node = node.value[token]
    }
  }

  // returns FormNode
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
