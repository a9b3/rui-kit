import styles    from './index.css'
import cx        from 'classnames'
import PropTypes from 'prop-types'
import React     from 'react'

export default class AppShell extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    title: 'rui kit',
  }

  render() {
    const { title, children } = this.props
    return (
      <div className={cx(styles['app-shell'], 'rui')}>
        <header className={styles.header}>
          <h1>{title}</h1>
        </header>
        <nav className={styles.nav}>hi</nav>
        <section className={styles.content}>{children}</section>
      </div>
    )
  }
}
