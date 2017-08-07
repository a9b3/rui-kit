import { Image } from '../../src'

/* eslint-disable react/jsx-key */
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
/* eslint-enable react/jsx-key */
