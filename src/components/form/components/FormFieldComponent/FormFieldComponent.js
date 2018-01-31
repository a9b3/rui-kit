import PropTypes   from 'prop-types'
import React       from 'react'

import SelectField from './SelectField'

const ALLOWED_TYPES = ['input', 'textarea', 'select']

export default function FormFieldComponent({
  formElementType,
  value,
  onChange,
  ...rest
}) {
  const props = { value, onChange, ...rest }
  switch (formElementType) {
    case 'textarea':
      return <textarea {...props} />
    case 'select':
      return <SelectField {...props} />
    default:
      return <input {...props} />
  }
}
FormFieldComponent.propTypes = {
  formElementType: PropTypes.oneOf(ALLOWED_TYPES),
  value: PropTypes.any,
  onChange: PropTypes.func,
}
