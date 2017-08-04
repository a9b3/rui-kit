import React from 'react'
import { Alert, Button } from '../../src'

class AlertDemo extends React.Component {
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

export default {
  display          : 'Alert',
  to               : '/alert',
  demoComponentAttr: {
    header: `<Alert />`,
    demos : [
      <AlertDemo />,
    ],
    codeSnippetType: 'jsx',
    codeSnippet    : `
class AlertDemo extends React.Component {
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
      <button onClick={this.showAll}>Show</button>
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
          `,
  },
}
