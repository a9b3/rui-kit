import styles         from './styles.css'

import cx             from 'classnames'
import PropTypes      from 'prop-types'
import React          from 'react'

import LoadingOverlay from '~/components/LoadingOverlay'

export const BUTTON_TYPES = {
  filled: 'filled',
  outline: 'outline',
}

export default class Button extends React.PureComponent {
  static propTypes = {
    buttonType: PropTypes.oneOf(BUTTON_TYPES),
    rgb: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node,
  }

  static defaultProps = {
    buttonType: BUTTON_TYPES.filled,
    onClick: () => {},
  }

  state = { loading: false }

  handleClick = async () => {
    // https://github.com/gaearon/react-hot-loader/issues/391
    const _ = arguments // eslint-disable-line
    const { onClick } = this.props
    const { loading } = this.state
    if (loading) return

    this.setState({ loading: true })
    await onClick()
    this.setState({ loading: false })
  }

  render() {
    const { buttonType, children, disabled, href, rgb, ...rest } = this.props
    const { loading } = this.state

    const attr = {
      ...rest,
      className: cx(styles.button, rest.className, styles[buttonType], {
        [styles.disabled]: loading || disabled,
      }),
      style: {
        ['--buttonColor']: rgb,
        ...rest.style,
      },
      disabled: loading || disabled,
      href,
    }

    const content = (
      <div>
        <LoadingOverlay
          show={loading}
          rgb={buttonType === BUTTON_TYPES.filled ? '255, 255, 255' : rgb}
        />
        <span style={{ opacity: loading ? '0' : '1' }}>{children}</span>
      </div>
    )

    if (href) {
      return (
        <a {...attr} onClick={this.handleClick}>
          {content}
        </a>
      )
    }
    return (
      <button {...attr} onClick={this.handleClick}>
        {content}
      </button>
    )
  }
}
