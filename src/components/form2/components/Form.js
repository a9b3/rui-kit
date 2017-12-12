import cx        from 'classnames'
import PropTypes from 'prop-types'
import React     from 'react'

import FormState from '../FormState.js'

export default class Form extends React.Component {
  static childContextTypes = {
    formState: PropTypes.object.isRequired,
  }

  state = {
    formState: new FormState(),
  }

  getChildContext() {
    const {formState} = this.state
    return {formState}
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const {formState} = this.state
    const {onSubmit} = this.props
    await formState.callOnSubmit(onSubmit)
  }

  render() {
    return <form {...this.props} onSubmit={this.handleSubmit}/>
  }
}
