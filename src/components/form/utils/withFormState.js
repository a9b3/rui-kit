import {observer} from 'mobx-react'
import React      from 'react'

import FormState  from '../FormState.js'

export default function withFormState({fields}) {
  return WrappedComponent => {
    @observer
    class WithFormStateComponent extends React.Component {
      state = {formState: new FormState({fields})}

      render() {
        const {formState} = this.state
        return <WrappedComponent {...this.props} formState={formState} />
      }
    }
    return WithFormStateComponent
  }
}
