import React      from 'react'
import PropTypes  from 'prop-types'
import CSSModules from 'react-css-modules'

import styles     from './index.scss'

function TruncateText({
  children,
  ...rest
}) {
  return <div
    styleName='container'
    {...rest}
  >
    {children}
  </div>
}

TruncateText.propTypes = {
  children: PropTypes.node,
}

export default CSSModules(TruncateText, styles, {allowMultiple: true})
