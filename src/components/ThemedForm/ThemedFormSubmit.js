import React        from 'react'
import PropTypes    from 'prop-types'
import { observer } from 'mobx-react'

import Button       from '~/components/Button'

function ThemedFormSubmit({
  formState,
  onClick,
  ...rest
}) {
  const handleClick = async () => {
    if (formState.validateAll()) return
    await onClick()
  }

  return <Button
    {...rest}
    onClick={handleClick}
    disabled={formState.isFormValid}
  />
}

ThemedFormSubmit.propTypes = {
  formState: PropTypes.object.isRequired,
  onClick  : PropTypes.func.isRequired,
}

export default observer(ThemedFormSubmit)
