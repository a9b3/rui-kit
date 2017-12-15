import PropTypes     from 'prop-types'
import React         from 'react'

import withFormField from './withFormField.js'

@withFormField
export default class FormField extends React.Component {
  static propTypes = {
    render   : PropTypes.func.isRequired,
    formField: PropTypes.object.isRequired,
  }

  handleChange = (event) => {
    const {formField} = this.props
    formField.setValue(
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    )
  }

  getInputProps = ({...props}) => {
    const {formField} = this.props
    return {
      ...props,
      onChange: this.handleChange,
      value   : formField.value,
    }
  }

  render() {
    const {render, formField} = this.props
    return render({getInputProps: this.getInputProps, formField})
  }
}
