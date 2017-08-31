import styles       from './sidebar.component.scss'
import React        from 'react'
import CSSModules   from 'react-css-modules'
import PropTypes    from 'prop-types'
import { observer } from 'mobx-react'
import {
  NavLink,
  withRouter,
}                   from 'react-router-dom'

import {
  Sidebar,
  Dropdown,
  theme,
}                 from '../index.js'

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
  return <Sidebar
    className={styles.sidebar}
    style={{
      background: theme.get('primaryBgColor'),
      color     : theme.get('primaryColor'),
    }}
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
  </Sidebar>
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

export default CSSModules(withRouter(observer(SidebarComponent)), styles, {allowMultiple: true})
