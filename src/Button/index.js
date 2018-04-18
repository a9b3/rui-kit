import styles         from './styles.css'

import cx             from 'classnames'
import { noop, omit } from 'lodash'
import PropTypes      from 'prop-types'
import React          from 'react'

import Loading        from '~/Loading'

export const BUTTON_TYPES = {
  FILLED: 'filled',
  OUTLINE: 'outline',
}

export default class Button extends React.PureComponent {
  static propTypes = {
    buttonType: PropTypes.oneOf(BUTTON_TYPES),
    // rgb value eg. "0, 0, 0" (for black, comma included)
    rgb: PropTypes.string,
    // href link will trigger an a tag to be rendered instead the default button
    href: PropTypes.string,
    onClick: PropTypes.func,
    loading: PropTypes.bool,
    children: PropTypes.node,
    // to be rendered when onClick is triggered with a Promise
    loadingComponent: PropTypes.func,
  }

  static defaultProps = {
    buttonType: BUTTON_TYPES.FILLED,
    onClick: noop,
    loadingComponent: <Loading />,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.loading !== nextProps.loading) {
      return { loading: nextProps.loading }
    }
    return null
  }

  state = { loading: this.props.loading || false }

  handleClick = async () => {
    if (this.state.loading) return

    this.setState({ loading: true })
    await this.props.onClick()
    this.setState({ loading: false })
  }

  render() {
    const {
      buttonType,
      children,
      href,
      rgb,
      loadingComponent,
      ...props
    } = omit(this.props, ['loading'])
    const { loading } = this.state
    const HTMLTag = href ? 'a' : 'button'

    return (
      <HTMLTag
        {...props}
        className={cx(styles.button, styles[buttonType], props.className)}
        style={{
          ['--buttonColor']: rgb,
          ...props.style,
        }}
        disabled={loading || props.disabled}
        href={href}
        onClick={this.handleClick}
      >
        {loading && <div className={styles.loading}>{loadingComponent}</div>}
        <span style={{ visibility: loading ? 'hidden' : '' }}>{children}</span>
      </HTMLTag>
    )
  }
}
