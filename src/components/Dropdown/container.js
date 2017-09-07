import styles    from './styles.scss'
import React     from 'react'
import PropTypes from 'prop-types'
import cx        from 'classnames'

export default class Dropdown extends React.Component {
  static propTypes = {
    header     : PropTypes.node,
    initialOpen: PropTypes.bool,
    children   : PropTypes.node,
  }

  state = {
    isOpened: true,
  }

  componentDidMount() {
    const {
      initialOpen = this.state.isOpened,
    } = this.props

    this.setState({
      isOpened: initialOpen,
    })
  }

  handleClick = () => {
    const {
      isOpened,
    } = this.state

    this.setState({
      isOpened: !isOpened,
    })
  }

  render() {
    const {
      isOpened,
    } = this.state

    const {
      header,
      children,
      ...rest
    } = this.props

    return <div
      {...rest}
      className={cx(styles.container, rest.className)}
    >
      <header
        onClick={this.handleClick}
      >
        {header}
      </header>

      {
        isOpened && <div className={styles.content}>
          {children}
        </div>
      }
    </div>
  }
}
