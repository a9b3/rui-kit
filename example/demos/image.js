import { Image } from '../../src'

export default {
  display          : 'Image',
  to               : '/image',
  demoComponentAttr: {
    header: `<Image />`,
    demos : [
      <Image
        style={{width: 200, height: 200}}
        src={require('./images/1.jpg')}
      />,
    ],
    codeSnippetType: 'jsx',
    codeSnippet    : `
      <Image
        style={{width: 200, height: 200}}
        src={require('./images/1.jpg')}
      />
          `,
  },
}
