import styles from './index.css'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Nav from './Nav'

export default class AppShell extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    links: PropTypes.any,
  }

  static defaultProps = {
    title: 'rui kit',
  }

  render() {
    const { links, title, children } = this.props
    return (
      <div className={cx(styles['app-shell'], 'rui')}>
        <header className={styles.header}>
          <h1>{title}</h1>
        </header>
        <Nav className={styles.nav} links={links} />
        <section className={styles.content}>{children}</section>
      </div>
    )
  }
}
