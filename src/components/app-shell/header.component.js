import styles    from './header.component.scss'
import PropTypes from 'prop-types'
import {
  NavLink,
}                from 'react-router-dom'

import {
  Icon,
}                from '../../index.js'
import withTheme from '../../decorators/withTheme'

console.log(withTheme)

function HeaderComponent({
  leftNode,
  headerNode,
  rightNodeLinks,
  toggleSidebar,
  theme,
  ...rest
}) {
  return <header styleName='header'
    {...rest}
    style={{
      background: theme.get('primaryBgColor'),
    }}
  >
    <div styleName='header__left item'>
      <Icon styleName='header__left__icon' type='hamburger' onClick={toggleSidebar} />
      {leftNode}
    </div>

    <div styleName='header__middle item'>
      {headerNode}
    </div>

    <nav styleName='header__right'>
      {
        rightNodeLinks.map(({ display, to, href }, i) => {
          const attr = {
            key      : i,
            className: `${styles.item} ${styles.link}`,
          }

          return to
            ? <NavLink {...attr} to={to}>
              {display}
            </NavLink>
            : <a
              {...attr}
              href={href}
              target='_blank'
            >
              {display}
            </a>
        })
      }
    </nav>
  </header>
}

HeaderComponent.propTypes = {
  headerNode    : PropTypes.node,
  // Top left display node.
  leftNode      : PropTypes.node,
  // Top right node.
  rightNodeLinks: PropTypes.arrayOf(PropTypes.shape({
    display: PropTypes.node.isRequired,
    to     : PropTypes.string,
    href   : PropTypes.string,
  })),
  toggleSidebar: PropTypes.func.isRequired,

  // from withTheme
  theme: PropTypes.object,
}

export default withTheme(cssModule(HeaderComponent, styles, {allowMultiple: true}))
