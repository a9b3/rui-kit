import styles   from './styles.scss'
import React    from 'react'
import cx       from 'classnames'

import { Form } from '~/components/Form'

function ThemedForm({
  ...rest
}) {
  return <Form
    {...rest}
    className={cx(styles.form, rest.className)}
  />
}

export default ThemedForm
