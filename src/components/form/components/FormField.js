import {observer}               from 'mobx-react'
import PropTypes                from 'prop-types'
import React                    from 'react'

import FormState                from '../FormState.js'

import FormFieldComponent       from './FormFieldComponent.js'
import FormFieldLayoutComponent from './FormFieldLayoutComponent.js'

@observer
export default class FormField extends React.Component {
  static propTypes = {
    name                         : PropTypes.string.isRequired,
    formState                    : PropTypes.instanceOf(FormState).isRequired,
    formFieldLayoutComponent     : PropTypes.func.isRequired,
    formFieldLayoutComponentProps: PropTypes.object,
    formFieldComponent           : PropTypes.func.isRequired,
    formFieldComponentProps      : PropTypes.object,
  }

  static defaultProps = {
    formFieldLayoutComponent: FormFieldLayoutComponent,
    formFieldComponent      : FormFieldComponent,
  }

  handleChange = (event) => {
    const {formState, name} = this.props
    const formStateField = formState.getFormStateField(name)
    formStateField.setValue(
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    )
  }

  render() {
    const {
      name,
      formState,
      formFieldLayoutComponent: Layout,
      formFieldLayoutComponentProps,
      formFieldComponent: FieldComponent,
      formFieldComponentProps,
    } = this.props

    const formStateField = formState.getFormStateField(name)

    const formElement = <FieldComponent
      {...formFieldComponentProps}
      value={formStateField.value}
      onChange={this.handleChange}
    />

    return <Layout
      {...formFieldLayoutComponentProps}
      name={name}
      formElement={formElement}
      error={formStateField.error}
      modified={formStateField.modified}
    />
  }
}
