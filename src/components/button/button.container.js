import React           from 'react'
import PropTypes       from 'prop-types'
import ButtonComponent from './button.component.js'

export default class ButtonContainer extends React.PureComponent {
  static propTypes = {
    // Pick from two of the provided stylings.
    type              : PropTypes.oneOf(['filled', 'outline']),
    color             : PropTypes.string,
    // Provide href to render a element instead of button element.
    href              : PropTypes.string,
    onClick           : PropTypes.func,
    // Boolean to show loading or not.
    loading           : PropTypes.bool,
    // Override style.
    style             : PropTypes.object,
    children          : PropTypes.node,
    loadingOverlayAttr: PropTypes.object,
  }

  static defaultProps = {
    type              : 'filled',
    loadingOverlayAttr: {},
  }

  state = {
    loading: false,
  }

  handleClick = async () => {
    const {
      loading,
    } = this.state
    if (loading) return

    const {
      onClick,
    } = this.props
    if (!onClick) return

    this.setState({ loading: true })
    try {
      await onClick()
    } catch (err) {
      console.error(err)
    }
    this.setState({ loading: false })
  }

  render() {
    const {
      loading,
    } = this.state

    return <ButtonComponent
      {...this.props}
      onClick={this.handleClick}
      loading={loading}
    />
  }
}
