import React           from 'react'
import PropTypes       from 'prop-types'
import ButtonComponent from './button.component.js'

export default class ButtonContainer extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
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
