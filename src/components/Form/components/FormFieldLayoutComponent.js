import styles    from './FormFieldLayoutComponent.css'

import cx        from 'classnames'
import PropTypes from 'prop-types'
import React     from 'react'

export default function FormFieldLayoutComponent({error, modified, formElement, name, label, ...rest}) {
  return <div
    {...rest}
    className={cx(styles['form-field-layout'], rest.className)}
  >
    <header className={styles.header}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      {error && <div className={styles.error}>{error}</div>}
    </header>
    {React.cloneElement(formElement, {
      id       : name,
      className: cx(
        formElement.props.className,
        styles['form-element'],
      ),
    })}
  </div>
}
FormFieldLayoutComponent.propTypes = {
  name       : PropTypes.string,
  error      : PropTypes.string,
  modified   : PropTypes.bool,
  formElement: PropTypes.node,
  label      : PropTypes.string,
}
