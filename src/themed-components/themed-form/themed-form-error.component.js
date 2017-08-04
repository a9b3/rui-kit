import styles       from './themed-form-error.component.scss'
import React        from 'react'
import PropTypes    from 'prop-types'
import CSSModules   from 'react-css-modules'
import { observer } from 'mobx-react'

function ThemedFormErrorComponent({
  formState,
  ...rest
}) {
  if (!formState.submitError) {
    return null
  }

  return <div
    styleName='error'
    {...rest}
  >
    {formState.submitError.message}
  </div>
}

ThemedFormErrorComponent.propTypes = {
  formState: PropTypes.object.isRequired,
}

export default observer(CSSModules(ThemedFormErrorComponent, styles, {allowMultiple: true}))
