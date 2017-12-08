import invariant from 'invariant'
import PropTypes from 'prop-types'
import React     from 'react'

const ALLOWED_TYPES = ['input', 'textarea', 'select']

export default function createFormFieldComponent({formElementType, attr}) {
  invariant(ALLOWED_TYPES.includes(formElementType), `'formElementType' must be one of ${ALLOWED_TYPES}`)

  let formElement
  switch(formElementType) {
  case 'input':
    formElement = <input {...attr}/>
    break
  case 'textarea':
    formElement = <textarea {...attr}/>
    break
  case 'select':
    formElement = <select {...attr}/>
    break
  }

  function FormFieldComponent({value, onChange, layout: Layout, ...rest}) {
    return <Layout
      {...rest}
      formElement={React.cloneElement(formElement, {value, onChange})}
    />
  }
  FormFieldComponent.propTypes = {
    value   : PropTypes.string,
    onChange: PropTypes.func,
    layout  : PropTypes.func,
  }

  return FormFieldComponent
}
