import React        from 'react'
import PropTypes    from 'prop-types'
import { observer } from 'mobx-react'

function FormField({
  formType,
  children,
  formState,
  formFieldKey,
  ...rest
}) {
  switch(formType) {
  default:
    return <input
      type='text'
      {...rest}
      onChange={evt => handleChange(evt, formState, formFieldKey)}
    >
      {children}
    </input>
  }
}

FormField.propTypes = {
  // Type of html form element to create. eg. input
  formType    : PropTypes.oneOf(['input']),
  // Instance of FormState.
  formState   : PropTypes.object.isRequired,
  // The specific key for which this form field is for. This should be the
  // same key as one given to the validators.
  formFieldKey: PropTypes.string.isRequired,
  children    : PropTypes.node,
}

FormField.defaultProps = {
  formType: 'input',
}

async function handleChange(evt, formState, formFieldKey) {
  formState.set(formFieldKey, evt.target.value)
}

export default observer(FormField)
