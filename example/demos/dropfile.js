import {
  Dropfile,
  Alert,
} from '../../src'

class DropfileExample extends React.Component {
  render() {
    return <div style={{
      height: 400,
    }}>
      <Dropfile />
    </div>
  }
}

export default {
  display          : 'Dropfile',
  to               : '/dropfile',
  demoComponentAttr: {
    header     : `<Dropfile />`,
    description: 'Dropfile component.',
    demos      : [
      <DropfileExample />,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
            hi
          `,
  },
}
