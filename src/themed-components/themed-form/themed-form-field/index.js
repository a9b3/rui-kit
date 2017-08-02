import styles         from './index.scss'
import React          from 'react'
import CSSModules     from 'react-css-modules'
import PropTypes      from 'prop-types'
import FormField      from '../../../components/form/form-field'
import FormFieldError from '../../../components/form/form-field-error'
import { observer }   from 'mobx-react'

@observer
@CSSModules(styles)
export default class ThemedFormField extends React.Component {
  static propTypes = {
    formState: PropTypes.object.isRequired,
    formFieldKey: PropTypes.string.isRequired,
    formFieldErrorAttr: PropTypes.object,
  }

  render() {
    const {
      formState,
      formFieldKey,
      formFieldErrorAttr,
      type, // eslint-disable-line
      ...rest,
    } = this.props

    const hasError = Boolean(formState.errors[formFieldKey])

    // TODO Handle styling different FormField types here by looking at
    // this.props.type
    return <span styleName='container'>
      <FormField
        styleName={`form-field ${hasError ? 'error' : ''}`}
        formState={formState}
        formFieldKey={formFieldKey}
        {...rest}
      />

      <FormFieldError
        styleName='form-field-error'
        formState={formState}
        formFieldKey={formFieldKey}
        {...formFieldErrorAttr}
      />
    </span>
  }
}
