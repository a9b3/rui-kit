import hoistNonReactStatics from 'hoist-non-react-statics'
import {observer}           from 'mobx-react'
import PropTypes            from 'prop-types'
import React                from 'react'

import FormState            from '~/components/form/FormState'
import {CONTEXT_KEY}        from '~/components/form/constants'

export default function ruiForm({fields}) {
  return WrappedComponent => {
    const ObserverWrappedComponent = observer(WrappedComponent)

    class Wrapper extends React.Component {
      static displayName = `ruiForm(${WrappedComponent.displayName || WrappedComponent.name})`

      static childContextTypes = {
        [CONTEXT_KEY]: PropTypes.object.isRequired,
      }

      state = {
        formState: new FormState({fields}),
      }

      getChildContext() {
        const {formState} = this.state
        return {[CONTEXT_KEY]: {formState}}
      }

      render() {
        const {formState} = this.state
        return <ObserverWrappedComponent {...this.props} formState={formState} />
      }
    }
    return hoistNonReactStatics(Wrapper, ObserverWrappedComponent)
  }
}
