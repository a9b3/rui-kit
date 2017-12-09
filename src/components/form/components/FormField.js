import PropTypes     from 'prop-types'
import React         from 'react'

import withFormState from '../utils/withFormState.js'

@withFormState
export default class FormField extends React.Component {
  static propTypes = {
    formState: PropTypes.object.isRequired,
    name     : PropTypes.string.isRequired,
    layout   : PropTypes.node,
    render   : PropTypes.func,
  }

  handleChange = (event) => {
    const {name, formState} = this.props
    const formStateField = formState.getFormStateField(name)
    formStateField.setValue(
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    )
  }

  render() {
    const {render, formState, name, layout} = this.props
    const formStateField = formState.getFormStateField(name)

    return React.cloneElement(layout, {
      formFieldProps: {
        name,
        error   : formStateField.error,
        modified: formStateField.modified,
        value   : formStateField.value,
        onChange: this.handleChange,
      },
    })
  }
}
