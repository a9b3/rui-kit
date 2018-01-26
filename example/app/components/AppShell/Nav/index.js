import styles    from './index.css'
import cx        from 'classnames'
import PropTypes from 'prop-types'
import React     from 'react'
import { Link }  from 'react-router-dom'

export default function Nav({ className, links }) {
  const lis = links.map(({ display, ...link }, i) => (
    <li key={i} className={styles.li}>
      <Link {...link} className={styles.link} activeClassName={styles.active}>
        {display}
      </Link>
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
