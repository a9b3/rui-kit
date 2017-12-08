import {observer} from 'mobx-react'
import PropTypes  from 'prop-types'
import React      from 'react'

import FormState  from '../FormState.js'

@observer
export default class FormField extends React.Component {
  static propTypes = {
    name     : PropTypes.string.isRequired,
    formState: PropTypes.instanceOf(FormState).isRequired,
    component: PropTypes.func,
  }

  handleChange = (event) => {
    const {formState, name} = this.props
    const formStateField = formState.formStateFieldsMap.get(name)
    formStateField.setValue(event.target.value)
  }

  render() {
    const {
      name,
      formState,
      component: Component,
    } = this.props

    const formStateField = formState.formStateFieldsMap.get(name)

    // Passing object
    return <Component
      value={formStateField.value}
      error={formStateField.error}
      modified={formStateField.modified}
      onChange={this.handleChange}
    />
  }
}
