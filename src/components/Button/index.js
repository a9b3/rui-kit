import styles         from './styles.css'

import cx             from 'classnames'
import PropTypes      from 'prop-types'
import React          from 'react'

import LoadingOverlay from '~/components/LoadingOverlay'

export const BUTTON_TYPES = {
  filled : 'filled',
  outline: 'outline',
}

export default class Button extends React.PureComponent {
  static propTypes = {
    type    : PropTypes.oneOf(BUTTON_TYPES),
    rgb     : PropTypes.string,
    href    : PropTypes.string,
    onClick : PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node,
  }

  static defaultProps = {
    type   : BUTTON_TYPES.filled,
    onClick: () => {},
  }

  state = {loading: false}

  handleClick = async () => {
    const {onClick} = this.props
    const {loading} = this.state
    if (loading) return

    this.setState({loading: true})
    await onClick()
    this.setState({loading: false})
  }

  render() {
    const {type, children, disabled, href, rgb, ...rest} = this.props
    const {loading} = this.state

    const attr = {
      ...rest,
      className: cx(styles.button, rest.className, styles[type], {
        [styles.disabled]: loading || disabled,
      }),
      style: {
        ['--button-color']: rgb,
        ...rest.style,
      },
      onClick : this.handleClick,
      disabled: loading || disabled,
      href,
    }

    const content = (
      <div>
        <LoadingOverlay
          show={loading}
          rgb={type === BUTTON_TYPES.filled ? '255, 255, 255' : rgb}
        />
        <span style={{opacity: loading ? '0' : '1'}}>{children}</span>
      </div>
    )
    if (href) {
      return <a {...attr}> {content} </a>
    }
    return <button {...attr}> {content} </button>
  }
}
