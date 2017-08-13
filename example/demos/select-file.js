import SelectFileExample from './select-file-example.js'

/* eslint-disable react/jsx-key */
export default {
  display          : 'SelectFile',
  to               : '/select-file',
  demoComponentAttr: {
    header: `<SelectFile />`,
    demos : [
      <SelectFileExample />,
    ],
    codeSnippetType: 'jsx',
    codeSnippet    : `
class SelectFileExample extends React.Component {
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
          `,
  },
}
/* eslint-enable react/jsx-key */
