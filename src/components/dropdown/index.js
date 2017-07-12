import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'

@CSSModules(styles)
export default class Dropdown extends React.Component {
  static propTypes = {
    header: PropTypes.node,
    initialOpen: PropTypes.bool,
    children: PropTypes.node,
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
      ...rest,
    } = this.props

    return <div
      styleName='container'
      {...rest}
    >
      <div
        onClick={this.handleClick}
      >
        {header}
      </div>

      {
        isOpened && <div>
          {children}
        </div>
      }
    </div>
  }
}
