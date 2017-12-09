import styles    from './FormFieldLayoutComponent.css'

import cx        from 'classnames'
import PropTypes from 'prop-types'
import React     from 'react'

export default function FormFieldLayoutComponent({
  formFieldProps: {
    error,
    modified,
    field,
    name,
  },
  label,
  ...rest
}) {
  return <div
    {...rest}
    className={cx(styles['form-field-layout'], rest.className)}
  >
    <label
      className={styles.label}
      htmlFor={name}>
      {label}
    </label>
    {
      error && <div className={styles.error}>{error}</div>
    }
    {
      React.cloneElement(field, {
        id       : name,
        className: cx(
          field.props.className,
          styles['form-element'],
        ),
      })
    }
  </div>
}
FormFieldLayoutComponent.propTypes = {
  formFieldProps: PropTypes.object,
  label         : PropTypes.string,
}
