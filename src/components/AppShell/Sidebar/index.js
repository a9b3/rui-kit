import styles      from './styles.scss'
import React       from 'react'
import PropTypes   from 'prop-types'
import {
  NavLink,
  withRouter,
}                  from 'react-router-dom'

function SidebarComponent({
  links,
  /* eslint-disable */
  history,
  location,
  path,
  staticContext,
  match,
  /* eslint-enable */
  ...rest
}) {
  return <aside
    className={styles.sidebar}
    {...rest}
  >
    {
      links.map((link, i) => {
        return <div key={i}>
          {
            link.header && <header className={styles.dropheader}>
              {link.header}
            </header>
          }
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
        </div>
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

export default withRouter(SidebarComponent)
