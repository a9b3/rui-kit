import PropTypes from 'prop-types'
import React     from 'react'

import FormState from '../FormState.js'

export default class Form extends React.Component {
  static propTypes = {
    formState: PropTypes.instanceOf(FormState).isRequired,
    onSubmit : PropTypes.func.isRequired,
    children : PropTypes.node,
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
