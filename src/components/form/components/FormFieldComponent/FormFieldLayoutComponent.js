import styles from './FormFieldLayoutComponent.css'

import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import FormFieldComponent from './FormFieldComponent'

export default function FormFieldLayoutComponent({
  modified,
  error,
  label,
  path,
  formFieldComponentProps,
  ...rest
}) {
  return (
    <div {...rest} className={cx(styles['form-field-layout'], rest.className)}>
      <label className={styles.label} htmlFor={path}>
        {label}
        {modified && '*'}
      </label>
      {error && <div className={styles.error}>{error}</div>}
      <FormFieldComponent
        id={path}
        className={cx(
          styles['form-element'],
          formFieldComponentProps.className,
        )}
        {...formFieldComponentProps}
      />
    </div>
  )
}
FormFieldLayoutComponent.propTypes = {
  modified: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  path: PropTypes.string,
  formFieldComponentProps: PropTypes.shape({
    formElementType: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
  }).isRequired,
}
