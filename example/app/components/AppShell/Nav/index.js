import styles from './index.css'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav({ className, links }) {
  console.log(links)
  const lis = links.map(({ display, ...link }, i) => (
    <li key={i} className={styles.li}>
      <NavLink
        {...link}
        className={styles.link}
        activeClassName={styles.active}
      >
        {display}
      </NavLink>
    </li>
  ))

  return (
    <nav className={cx(className)}>
      <ul>{lis}</ul>
    </nav>
  )
}
Nav.propTypes = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.any),
}
