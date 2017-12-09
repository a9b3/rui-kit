import PropTypes from 'prop-types'
import React     from 'react'

import FormState from '../FormState.js'

export default function withFormState({fields}) {
  return WrappedComponent => class WithFormStateComponent extends React.Component {
    static propTypes = {
      initialValues: PropTypes.object,
    }

    static defaultProps = {
      initialValues: {},
    }

    state = {formState: undefined}

    componentWillMount() {
      const {initialValues} = this.props
      const formState = new FormState({fields})
      formState.setInitialValues(initialValues)
      this.setState({formState})
    }

    render() {
      const {formState} = this.state

      return <WrappedComponent
        {...this.props}
        formState={formState}
      />
    }
  }
}
