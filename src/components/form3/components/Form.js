import {noop}    from 'lodash'
import PropTypes from 'prop-types'
import React     from 'react'

import FormState from '../FormState.js'

export default class Form extends React.Component {
  static propTypes = {
    onSubmit    : PropTypes.func,
    initialState: PropTypes.object,
  }

  static defaultProps = {
    onSubmit    : noop,
    initialState: {},
  }

  static childContextTypes = {
    formState   : PropTypes.object.isRequired,
    initialState: PropTypes.object.isRequired,
  }

  state = {
    formState: new FormState(),
  }

  componentWillMount() {
    const {formState} = this.state
    const {initialState} = this.props
    const createdNode = formState.createChildNodeFromJS(initialState)
    formState.value = createdNode.value
  }

  getChildContext() {
    const {initialState} = this.props
    const {formState} = this.state
    return {
      formState,
      initialState,
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const {formState} = this.state
    const {onSubmit} = this.props
    await formState.callOnSubmit(onSubmit)
  }

  render() {
    const {
      initialState, // eslint-disable-line
      ...props
    } = this.props
    return <form {...props} onSubmit={this.handleSubmit}/>
  }
}
