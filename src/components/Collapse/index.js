import styles    from './styles.scss'
import cx        from 'classnames'
import PropTypes from 'prop-types'

export default class Collapse extends React.Component {
  static propTypes = {
    content: PropTypes.node,
  }

  state = {
    isOpened: false,
  }

  setOpen = (isOpened = !this.state.isOpened) => {
    this.setState({
      isOpened,
    })
  }

  render() {
    const {
      content,
      ...rest
    } = this.props

    const {
      isOpened,
    } = this.state

    return <div
      {...rest}
      className={cx(styles.container, rest.className)}
      onClick={() => this.setOpen()}
    >
      {
        isOpened ? content : this.props.children
      }
    </div>
  }
}
