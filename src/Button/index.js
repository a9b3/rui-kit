import styles         from './styles.css'

import cx             from 'classnames'
import { noop }       from 'lodash'
import PropTypes      from 'prop-types'
import React          from 'react'

import LoadingOverlay from '~/LoadingOverlay'

export const BUTTON_TYPES = {
  FILLED: 'filled',
  OUTLINE: 'outline',
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
    buttonType: BUTTON_TYPES.FILLED,
    onClick: noop,
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
    const HTMLTag = href ? 'a' : 'button'

    return (
      <HTMLTag
        {...rest}
        className={cx(
          styles.button,
          styles[buttonType],
          {
            [styles.disabled]: loading || disabled,
          },
          rest.className,
        )}
        style={{
          ['--buttonColor']: rgb,
          ...rest.style,
        }}
        disabled={loading || disabled}
        href={href}
        onClick={this.handleClick}
      >
        <LoadingOverlay
          show={loading}
          rgb={buttonType === BUTTON_TYPES.FILLED ? '255, 255, 255' : rgb}
        />
        {children}
      </HTMLTag>
    )
  }
}
