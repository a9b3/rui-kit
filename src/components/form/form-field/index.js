import React          from 'react'
import CSSModules     from 'react-css-modules'
import PropTypes      from 'prop-types'
import { observer }   from 'mobx-react'

import styles         from './index.scss'

@observer
@CSSModules(styles)
export default class FormField extends React.Component {
  static propTypes = {
    // Type of html form element to create. eg. input
    type        : PropTypes.oneOf(['input']),
    // Instance of FormState.
    formState   : PropTypes.object.isRequired,
    // The specific key for which this form field is for. This should be the
    // same key as one given to the validators.
    formFieldKey: PropTypes.string.isRequired,
    children    : PropTypes.node,
  }

  handleChange = async (evt) => {
    const {
      formState,
      formFieldKey,
    } = this.props

    formState.set(formFieldKey, evt.target.value)
  }

  renderElement = () => {
    const {
      type,
      children,
      formState, // eslint-disable-line
      formFieldKey, // eslint-disable-line
      ...rest
    } = this.props

    switch(type) {
    default:
      return <input
        type='text'
        {...rest}
        onChange={this.handleChange}
      >
        {children}
      </input>
    }
  }

  render() {
    return this.renderElement()
  }
}
