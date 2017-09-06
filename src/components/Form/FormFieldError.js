import React        from 'react'
import PropTypes    from 'prop-types'
import { observer } from 'mobx-react'

function FormFieldError({
  formState,
  formFieldKey,
  ...rest
}) {
  const error = formState.getError(formFieldKey)

  if (!error) return null

  return <span
    {...rest}
  >
    {error.message}
  </span>
}

FormFieldError.propTypes = {
  // Instance of FormState.
  formState   : PropTypes.object.isRequired,
  // The specific key for which this form field is for. This should be the
  // same key as one given to the validators.
  formFieldKey: PropTypes.string.isRequired,
}

export default observer(FormFieldError)
