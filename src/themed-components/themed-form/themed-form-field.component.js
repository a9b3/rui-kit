import React        from 'react'
import CSSModules   from 'react-css-modules'
import PropTypes    from 'prop-types'
import { observer } from 'mobx-react'
import variables    from 'esayemm-styles/variables'

import styles       from './themed-form-field.component.scss'
import {
  FormField,
  FormFieldError,
}                   from '../../index.js'

function ThemedFormField({
  label,
  formState,
  formFieldKey,
  formFieldErrorAttr,
  formFieldAttr,
  style,
  ...rest
}) {
  const hasError = Boolean(formState.errors.get(formFieldKey))

  return <span
    styleName={`container ${hasError ? 'container--error': ''}`}
    style={style}
    {...rest}
  >
    <div styleName='container__top'>
      {
        label && <label
          styleName='container__label'
        >
          {label}
        </label>
      }

      <FormFieldError
        styleName='container__form-field-error'
        style={{
          color: `${variables.red}`,
        }}
        formState={formState}
        formFieldKey={formFieldKey}
        {...formFieldErrorAttr}
      />
    </div>

    <FormField
      styleName='container__form-field'
      formState={formState}
      formFieldKey={formFieldKey}
      {...formFieldAttr}
    />

  </span>
}

ThemedFormField.propTypes = {
  label             : PropTypes.string,
  formState         : PropTypes.object.isRequired,
  formFieldKey      : PropTypes.string.isRequired,
  formFieldErrorAttr: PropTypes.object,
  formFieldAttr     : PropTypes.object,
  style             : PropTypes.object,
}

ThemedFormField.defaultProps = {
  formFieldErrorAttr: {},
  formFieldAttr     : {},
  style             : {},
}

export default observer(CSSModules(ThemedFormField, styles, {allowMultiple: true}))
