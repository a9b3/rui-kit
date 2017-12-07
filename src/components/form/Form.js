import PropTypes from 'prop-types'
import React     from 'react'

import FormState from './FormState.js'

export default class Form extends React.Component {
  static propTypes = {
    formState: PropTypes.instanceOf(FormState).isRequired,
    children : PropTypes.node,
    onSubmit : PropTypes.func,
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const {onSubmit, formState} = this.props

    formState.loading = true
    formState.error = undefined

    let error
    try {
      await onSubmit(formState.getAllValues())
    } catch (err) {
      console.error(err)
      error = err
    }

    formState.loading = false
    formState.error = error
  }

  render() {
    const {
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
