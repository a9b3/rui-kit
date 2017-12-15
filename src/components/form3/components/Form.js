import {noop}    from 'lodash'
import PropTypes from 'prop-types'
import React     from 'react'

export default class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  static defaultProps = {
    onSubmit: noop,
  }

  static contextTypes = {
    formState: PropTypes.object,
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const {formState} = this.context
    const {onSubmit} = this.props
    await formState.callOnSubmit(onSubmit)
  }

  render() {
    const {...props} = this.props
    return <form {...props} onSubmit={this.handleSubmit}/>
  }
}
