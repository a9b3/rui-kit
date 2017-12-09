import hoistNonReactStatics from 'hoist-non-react-statics'
import {observer}           from 'mobx-react'
import PropTypes            from 'prop-types'
import React                from 'react'

import {CONTEXT_KEY}        from '../constants.js'

export default function withFormState(WrappedComponent) {
  const ObserverWrappedComponent = observer(WrappedComponent)

  class Wrapper extends React.Component {
    static displayName = `withFormState(${WrappedComponent.displayName || WrappedComponent.name})`

    static contextTypes = {
      [CONTEXT_KEY]: PropTypes.object,
    }

    render() {
      const {formState} = this.context[CONTEXT_KEY]
      return <ObserverWrappedComponent {...this.props} formState={formState} />
    }
  }
  return hoistNonReactStatics(Wrapper, ObserverWrappedComponent)
}
