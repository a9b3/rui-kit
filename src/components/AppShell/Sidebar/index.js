import styles      from './styles.scss'
import React       from 'react'
import PropTypes   from 'prop-types'
import {
  NavLink,
  withRouter,
}                  from 'react-router-dom'

import Dropdown    from '~/components/Dropdown'
import {withTheme} from '~/theme'

function SidebarComponent({
  links,
  /* eslint-disable */
  history,
  location,
  path,
  staticContext,
  match,
  theme,
  /* eslint-enable */
  ...rest
}) {
  return <aside
    className={styles.sidebar}
    {...rest}
  >
    {
      links.map((link, i) => {
        return <Dropdown
          key={i}
          header={
            link.header && <header className={styles.dropheader}>
              {link.header}
            </header>
          }
        >
          {
            link.items.map((item, j) => {
              return <NavLink
                key={j}
                to={item.to || '#'}
                className={styles.dropchild}
                activeClassName={styles.active}
              >
                {item.display}
              </NavLink>
            })
          }
        </Dropdown>
      })
    }
  </aside>
}

SidebarComponent.propTypes = {
  // If present, the sidebar will display with the links.
  links: PropTypes.arrayOf(PropTypes.shape({
    header: PropTypes.string.isRequired,
    items : PropTypes.arrayOf(PropTypes.shape({
      display: PropTypes.string.isRequired,
      to     : PropTypes.string,
    })),
  })),
}

export default withRouter(withTheme(SidebarComponent))
