import styles      from './styles.scss'
import PropTypes   from 'prop-types'
import {NavLink}   from 'react-router-dom'
import cx          from 'classnames'

import {Icon}      from '~/components/Icon'
import {withTheme} from '~/theme'

function HeaderComponent({
  leftNode,
  headerNode,
  rightNodeLinks,
  toggleSidebar,
  theme,
  ...rest
}) {
  return <header
    {...rest}
    style={{
      background: theme.get('primaryBgColor'),
    }}
    className={cx(
      'rui__appshell__header',
      styles.header,
      rest.className,
    )}
  >
    <div
      className={cx(styles.header__left, styles.item)}
    >
      <Icon
        className={styles.header__left__icon}
        type='hamburger' onClick={toggleSidebar} />
      {leftNode}
    </div>

    <div
      className={cx(styles.header__middle, styles.icon)}
    >
      {headerNode}
    </div>

    <nav
      className={styles.header__right}
    >
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

export default withTheme(HeaderComponent)
