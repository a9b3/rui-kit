import React      from 'react'
import PropTypes  from 'prop-types'
import CSSModules from 'react-css-modules'

import styles     from './index.scss'

function Row({
  align,
  attrItem,
  items,
  ...rest
}) {
  return <div
    styleName={`container ${align}`}
    {...rest}
  >
    {renderItems(items, attrItem)}
  </div>
}

Row.propTypes = {
  align   : PropTypes.oneOf(['left', 'right', 'center']),
  attrItem: PropTypes.object,
  items   : PropTypes.node,
}

Row.defaultProps = {
  align   : 'center',
  attrItem: {},
  items   : [],
}

function renderItems(items, attrItem) {
  return items.map((node, i) => {
    return <div
      key={i}
      styleName='container__item'
      {...attrItem}
    >
      {node}
    </div>
  }).filter(Boolean)
}

export default CSSModules(Row, styles, {allowMultiple: true})
