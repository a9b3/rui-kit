import React        from 'react'
import CSSModules   from 'react-css-modules'
import PropTypes    from 'prop-types'
import { observer } from 'mobx-react'

import styles       from './index.scss'

function Form({
  formState,
  onSubmit,
  children,
  ...rest
}) {
  const handleSubmit = async (evt) => {
    evt.preventDefault()

    if (!formState.validateAll()) {
      return
    }

    await onSubmit()
  }
  return <form
    styleName='container'
    {...rest}
    onSubmit={handleSubmit}
  >
    {children}
  </form>
}

Form.propTypes = {
  // Instance of FormState.
  formState: PropTypes.object.isRequired,
  onSubmit : PropTypes.func,
  // Subtree should contain some FormField components for this to be useful.
  children : PropTypes.node,
}

Form.defaultProps = {
  onSubmit: () => {},
}

export default observer(CSSModules(Form, styles, {allowMultiple: true}))
