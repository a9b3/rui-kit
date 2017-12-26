import styles             from './FormFieldLayoutComponent.css'

import cx                 from 'classnames'
import PropTypes          from 'prop-types'
import React              from 'react'

import FormFieldComponent from './FormFieldComponent'

export default function FormFieldLayoutComponent({
  getInputProps,
  formField,
  label,
  path,
  formFieldComponentProps,
  ...rest
}) {
  return <div
    {...rest}
    className={cx(
      styles['form-field-layout'],
      rest.className,
    )}
  >
    <label
      className={styles.label}
      htmlFor={path}
    >
      {label}
      {formField.modified && '*'}
    </label>
    {
      formField.validationError
      && (
        <div className={styles.error}>
          {formField.validationError}
        </div>
      )
    }
    <FormFieldComponent
      id={path}
      className={cx(styles['form-element'])}
      formElementType={formFieldComponentProps.formElementType}
      {...getInputProps(formFieldComponentProps)}
    />
  </div>
}
FormFieldLayoutComponent.propTypes = {
  getInputProps          : PropTypes.func.isRequired,
  formField              : PropTypes.object.isRequired,
  label                  : PropTypes.string,
  path                   : PropTypes.string,
  formFieldComponentProps: PropTypes.object,
}
FormFieldLayoutComponent.defaultProps = {
  formFieldComponentProps: {},
}
