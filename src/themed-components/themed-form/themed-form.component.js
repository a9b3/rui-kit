import React      from 'react'
import CSSModules from 'react-css-modules'

import styles     from './theme-form.component.scss'
import Form       from '../../components/form'

function ThemedForm({
  ...rest
}) {
  return <Form
    styleName='form'
    {...rest}
  />
}

export default CSSModules(ThemedForm, styles, {allowMultiple: true})
