import {observer}    from 'mobx-react'
import PropTypes     from 'prop-types'
import React         from 'react'

import {CONTEXT_KEY} from './constants.js'

@observer
export default class FormField extends React.Component {
  static propTypes = {
    name  : PropTypes.string.isRequired,
    layout: PropTypes.node,
    field : PropTypes.node,
  }

  static contextTypes = {
    [CONTEXT_KEY]: PropTypes.object,
  }

  handleChange = (event) => {
    const {formState} = this.context[CONTEXT_KEY]
    const {name} = this.props
    const formStateField = formState.getFormStateField(name)
    formStateField.setValue(
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    )
  }

  render() {
    const {formState} = this.context[CONTEXT_KEY]
    const {name, layout, field} = this.props
    const formStateField = formState.getFormStateField(name)

    return React.cloneElement(layout, {
      formFieldProps: {
        name,
        error   : formStateField.error,
        modified: formStateField.modified,
        field   : React.cloneElement(field, {
          formFieldProps: {
            value   : formStateField.value,
            onChange: this.handleChange,
          },
        }),
      },
    })
  }
}
