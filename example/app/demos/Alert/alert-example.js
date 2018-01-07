import { Alert, Button } from '../../../src'
import React             from 'react'

export default class AlertDemo extends React.Component {
  state = {
    showAlert : true,
    showAlert2: true,
  }

  toggleAlert(key) {
    const prev = this.state[key]
    this.setState({
      [key]: !prev,
    })
  }

  showAll = () => {
    this.setState({
      showAlert : true,
      showAlert2: true,
    })
  }

  render() {
    return <div>
      <Button style={{fontSize: '.8em'}} onClick={this.showAll}>Show</Button>
      <Alert
        show={this.state.showAlert}
        close={() => this.toggleAlert('showAlert')}
        style={{margin: '2rem 0'}}
      >
        {'hi'}
      </Alert>
      <Alert
        show={this.state.showAlert2}
        type='positive'
        close={() => this.toggleAlert('showAlert2')}
        style={{margin: '2rem 0'}}
      >
        {'hi'}
      </Alert>
    </div>
  }
}
