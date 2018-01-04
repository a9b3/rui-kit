import {get}      from 'lodash'
import {observer} from 'mobx-react'
import PropTypes  from 'prop-types'
import React      from 'react'

import FormNode   from '../FormNode.js'

export default function withFormField(WrappedComponent) {
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
        const initialValue = get(initialState, path) || formFieldArgs.initialValue
        parent.value[path.split('.').pop()] = new FormNode({
          ...formFieldArgs,
          value: initialValue,
          initialValue,
          parent,
          type,
        })
      }
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
        throw new Error(`parent doesn't exist ${formState.getParentPath(path)}`)
      }
      return parent
    }

    render() {
      return (
        <ObserverWrappedComponent
          {...this.props}
          formField={this.getFormField()}
        />
      )
    }
  }
}
