import PropTypes     from 'prop-types'
import React         from 'react'

import FormState     from '~/components/form/FormState'
import FormField     from '~/components/form/components/FormField'
import withFormState from '~/components/form/utils/withFormState'

@withFormState
export default class Form extends React.Component {
  static FormField = FormField

  static propTypes = {
    formState    : PropTypes.instanceOf(FormState).isRequired,
    onSubmit     : PropTypes.func.isRequired,
    children     : PropTypes.node,
    initialValues: PropTypes.object,
  }

  componentWillMount() {
    const {formState, initialValues} = this.props
    formState.setInitialValues(initialValues)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const {formState, onSubmit} = this.props
    await formState.callOnSubmit(onSubmit)
  }

  render() {
    const {
      onSubmit, // eslint-disable-line
      formState, // eslint-disable-line
      initialValues, // eslint-disable-line
      children,
      ...rest
    } = this.props

    return <form
      {...rest}
      onSubmit={this.handleSubmit}
    >
      {children}
    </form>
  }
}
