import { SelectFile } from '../../../src'

export default class SelectFileExample extends React.Component {
  state = {
    preview: null,
  }

  handleDrop = async (files) => {
    this.setState({
      preview: files[0].preview,
    })
  }

  render() {
    const {
      preview,
    } = this.state

    return <SelectFile
      onDrop={this.handleDrop}
    >
      {preview}
      <div>
        hi
      </div>
    </SelectFile>
  }
}
