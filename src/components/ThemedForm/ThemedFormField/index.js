import styles       from './styles.scss'
import React        from 'react'
import PropTypes    from 'prop-types'
import { observer } from 'mobx-react'
import variables    from 'esayemm-styles/variables'
import cx           from 'classnames'

import {
  FormField,
  FormFieldError,
}                   from '~/components/Form'

function ThemedFormField({
  label,
  formState,
  formFieldKey,
  formFieldErrorAttr,
  formFieldAttr,
  style,
  className,
  ...rest
}) {
  const hasError = Boolean(formState.errors.get(formFieldKey))

  return <div
    style={style}
    className={cx(styles.container, hasError && styles['container--error'], className)}
    {...rest}
  >
    <div className={cx(styles.container__top)}>
      {
        label && <label
          className={cx(styles.container__label)}
        >
          {label}
        </label>
      }

      <FormFieldError
        className={cx(styles['container__form-field-error'])}
        style={{
          color: `${variables.red}`,
        }}
        formState={formState}
        formFieldKey={formFieldKey}
        {...formFieldErrorAttr}
      />
    </div>

    <FormField
      className={cx(styles['container__form-field'])}
      formState={formState}
      formFieldKey={formFieldKey}
      {...formFieldAttr}
    />

  </div>
}

ThemedFormField.propTypes = {
  label             : PropTypes.string,
  formState         : PropTypes.object.isRequired,
  formFieldKey      : PropTypes.string.isRequired,
  formFieldErrorAttr: PropTypes.object,
  formFieldAttr     : PropTypes.object,
  style             : PropTypes.object,
  className         : PropTypes.string,
}

ThemedFormField.defaultProps = {
  formFieldErrorAttr: {},
  formFieldAttr     : {},
  style             : {},
}

export default observer(ThemedFormField)
