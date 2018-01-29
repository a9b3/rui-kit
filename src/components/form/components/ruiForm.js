import hoistNonReactStatics from 'hoist-non-react-statics'
import { observer }         from 'mobx-react'
import PropTypes            from 'prop-types'
import React                from 'react'

import FormState            from '../FormState.js'

export default function ruiForm(formFieldArgs = {}) {
  return function withRuiForm(WrappedComponent) {
    const ObserverWrappedComponent = observer(WrappedComponent)

    class Wrapper extends React.Component {
      static displayName = `ruiForm(${WrappedComponent.displayName ||
        WrappedComponent.name})`

      static propTypes = {
        initialState: PropTypes.object,
        formFieldArgs: PropTypes.object,
      }

      static defaultProps = {
        initialState: {},
        formFieldArgs: {},
      }

      static childContextTypes = {
        formState: PropTypes.object.isRequired,
        initialState: PropTypes.object.isRequired,
      }

      state = {
        formState: new FormState({ ...formFieldArgs }),
      }

      componentWillMount() {
        const { initialState } = this.props
        const { formState } = this.state
        const createdNode = formState.createChildNodeFromJS(initialState)
        formState.value = createdNode.value
      }

      getChildContext() {
        const { initialState } = this.props
        const { formState } = this.state
        return { formState, initialState }
      }

      render() {
        const { formState } = this.state
        return (
          <ObserverWrappedComponent {...this.props} formState={formState} />
        )
      }
    }

    return hoistNonReactStatics(Wrapper, ObserverWrappedComponent)
  }
}
