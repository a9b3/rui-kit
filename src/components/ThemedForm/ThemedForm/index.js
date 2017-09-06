import styles     from './styles.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'

import { Form }   from '~/components/Form'

function ThemedForm({
  ...rest
}) {
  return <Form
    styleName='form'
    {...rest}
  />
}

export default CSSModules(ThemedForm, styles, {allowMultiple: true})
