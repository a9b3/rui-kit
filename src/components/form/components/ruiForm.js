import hoistNonReactStatics from 'hoist-non-react-statics'
import { observer }         from 'mobx-react'
import PropTypes            from 'prop-types'
import React                from 'react'

import FormNode             from '../FormNode.js'
import FormState            from '../FormState.js'

export default function ruiForm(formFieldArgs = {}) {
  return function withRuiForm(WrappedComponent) {
    const ObserverWrappedComponent = observer(WrappedComponent)

    class Wrapper extends React.Component {
      static displayName = `ruiForm(${WrappedComponent.displayName ||
        WrappedComponent.name})`

      static childContextTypes = {
        formState: PropTypes.object.isRequired,
      }

      state = {
        formState: new FormState({ ...formFieldArgs }),
      }

      getChildContext() {
        const { formState } = this.state
        return { formState }
      }

      render() {
        const { formState } = this.state
        return <WrappedComponent {...this.props} formState={formState} />
      }
    }

    return hoistNonReactStatics(Wrapper, WrappedComponent)
  }
}
