import React        from 'react'
import PropTypes    from 'prop-types'
import { observer } from 'mobx-react'

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

export default observer(Form)
