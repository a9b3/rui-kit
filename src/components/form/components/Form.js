import PropTypes     from 'prop-types'
import React         from 'react'

import FormState     from '../FormState.js'
import FormField     from './FormField.js'
import {CONTEXT_KEY} from './constants.js'

export default class Form extends React.Component {
  static FormField = FormField

  static propTypes = {
    formState    : PropTypes.instanceOf(FormState).isRequired,
    onSubmit     : PropTypes.func.isRequired,
    children     : PropTypes.node,
    initialValues: PropTypes.object,
  }

  static childContextTypes = {
    [CONTEXT_KEY]: PropTypes.object.isRequired,
  }

  getChildContext() {
    const {formState} = this.props
    return {[CONTEXT_KEY]: {formState}}
  }

  // This can be in a hoc but it's so small I'm just going to leave it here for
  // now.
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
