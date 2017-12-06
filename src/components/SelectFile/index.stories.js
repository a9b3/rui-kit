import {boolean, withKnobs, text} from '@storybook/addon-knobs'
import {storiesOf}                from '@storybook/react'
import React                      from 'react'

import SelectFile                 from './index.js'

class SelectFileExample extends React.Component {
  state = {
    files: {},
  }

  handleDrop = (files) => {
    this.setState({files})
  }

  render() {
    const {files} = this.state

    return <SelectFile
      onDrop={this.handleDrop}
      disabled={boolean('disabled', false)}
      multiple={boolean('multiple', false)}
      accept={text('accept', '')}
    >
      <div style={{border: '1px solid black', width: '200px', height: '200px'}}>
        Click or drop a file on here<br />
        {JSON.stringify(files)}
      </div>
    </SelectFile>
  }
}

storiesOf('SelectFile', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <SelectFileExample />
  })
