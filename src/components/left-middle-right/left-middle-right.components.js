import React      from 'react'
import PropTypes  from 'prop-types'
import CSSModules from 'react-css-modules'

import styles     from './index.scss'

function LeftMiddleRight({
  left,
  middle,
  right,
  style,
  ...rest
}) {
  return <header
    styleName='container'
    {...rest}
    style={Object.assign({}, style)}
  >

    <section
      styleName='left'
    >
      {left}
    </section>

    <section
      styleName='middle'
    >
      {middle}
    </section>

    <section
      styleName='right'
    >
      {right}
    </section>

  </header>
}

LeftMiddleRight.propTypes = {
  left  : PropTypes.node,
  middle: PropTypes.node,
  right : PropTypes.node,
  style : PropTypes.object,
}

export default CSSModules(LeftMiddleRight, styles, {allowMultiple: true})
