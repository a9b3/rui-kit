import { get }      from 'lodash'
import { observer } from 'mobx-react'
import PropTypes    from 'prop-types'
import React        from 'react'

// passes down the FormNode associated with the given path
export default function withFormField(WrappedComponent) {
  const ObserverWrappedComponent = observer(WrappedComponent)

  return class WithFormField extends React.Component {
    static displayName = `withFormField(${WrappedComponent.displayName ||
      WrappedComponent.name})`

    static propTypes = {
      path: PropTypes.string.isRequired,
      formFieldArgs: PropTypes.object,
    }

    static defaultProps = {
      formFieldArgs: {},
    }

    static contextTypes = {
      formState: PropTypes.object,
    }

    state = {
      formField: undefined,
    }

    componentWillMount() {
      const { path, formFieldArgs } = this.props
      const { formState } = this.context
      const formField =
        formState.find(path) || formState.insert(path, formFieldArgs)
      console.log(`HERE`, formField)
      this.setState({ formField })
    }

    render() {
      const { formField } = this.state
      return <ObserverWrappedComponent {...this.props} formField={formField} />
    }
  }
}
