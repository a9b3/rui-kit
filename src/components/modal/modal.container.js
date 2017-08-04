import React          from 'react'
import PropTypes      from 'prop-types'
import ModalComponent from './modal.component.js'

export default class ModalContainer extends React.Component {
  static propTypes = {
    // This will be the access point.
    children    : PropTypes.node.isRequired,
    modalContent: PropTypes.node.isRequired,
  }

  state = {
    isOpen: false,
  }

  toggleModal = () => {
    const {
      isOpen,
    } = this.state

    this.setState({isOpen: !isOpen})
  }

  render() {
    const {
      isOpen,
    } = this.state
    const {
      modalContent,
      children,
      ...rest
    } = this.props

    return <span onClick={this.toggleModal}>
      <ModalComponent
        show={isOpen}
        {...rest}
      >
        {modalContent}
      </ModalComponent>

      {children}
    </span>
  }
}
