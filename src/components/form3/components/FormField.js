import {get}      from 'lodash'
import {observer} from 'mobx-react'
import PropTypes  from 'prop-types'
import React      from 'react'

import FormNode   from '../FormNode.js'

const withFormField = (WrappedComponent) => {
  const ObserverWrappedComponent = observer(WrappedComponent)

  return class WithFormField extends React.Component {
    static displayName = `withFormField(${WrappedComponent.displayName || WrappedComponent.name})`

    static propTypes = {
      path         : PropTypes.string.isRequired,
      formFieldArgs: PropTypes.object,
      type         : PropTypes.string.isRequired,
    }

    static defaultProps = {
      formFieldArgs: {},
    }

    static contextTypes = {
      formState   : PropTypes.object,
      initialState: PropTypes.object,
    }

    componentWillMount() {
      const {path, formFieldArgs, type} = this.props
      const {formState, initialState} = this.context
      if (!formState.find(path)) {
        const parent = this.getFormFieldParent()
        const initialValue = get(initialState, path)
        parent.value[path.split('.').pop()] = new FormNode({
          ...formFieldArgs,
          type,
          parent,
          value: initialValue,
          initialValue,
          path,
        })
      }
    }

    componentWillUpdate(nextProps) {
      this.getFormField().setInstanceVariables(nextProps.formFieldArgs)
    }

    getFormField() {
      const {path} = this.props
      const {formState} = this.context
      return formState.find(path)
    }

    getFormFieldParent() {
      const {path} = this.props
      const {formState} = this.context
      const parent = formState.find(formState.getParentPath(path))
      if (!parent) {
        throw new Error(`'parent doesn't exist`)
      }
      return parent
    }

    render() {
      return <ObserverWrappedComponent {...this.props} formField={this.getFormField()}/>
    }
  }
}

@withFormField
export default class FormField extends React.Component {
  static propTypes = {
    render   : PropTypes.func.isRequired,
    formField: PropTypes.object.isRequired,
  }

  handleChange = (event) => {
    const {formField} = this.props
    formField.setValue(
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    )
  }

  getInputProps = ({...props}) => {
    const {formField} = this.props
    return {
      ...props,
      onChange: this.handleChange,
      value   : formField.value,
    }
  }

  render() {
    const {render, formField} = this.props
    return render({getInputProps: this.getInputProps, formField})
  }
}
