import PropTypes   from 'prop-types'
import React       from 'react'

import SelectField from './SelectField.js'

const ALLOWED_TYPES = ['input', 'textarea', 'select']

export default function FormFieldComponent({formElementType, value, onChange, ...rest}) {
  let formElement
  switch(formElementType) {
  case 'input':
    formElement = <input />
    break
  case 'textarea':
    formElement = <textarea />
    break
  case 'select':
    formElement = <SelectField />
    break
  }

  return React.cloneElement(formElement, {
    ...rest,
    value,
    onChange,
  })
}
FormFieldComponent.propTypes = {
  formElementType: PropTypes.oneOf(ALLOWED_TYPES).isRequired,
  value          : PropTypes.string,
  onChange       : PropTypes.func,
}
