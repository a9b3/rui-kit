import { Dropfile } from '../../src'

export default {
  display          : 'Dropfile',
  to               : '/dropfile',
  demoComponentAttr: {
    header     : `<Dropfile />`,
    description: 'Dropfile component.',
    demos      : [
      <Dropfile>
              hi
      </Dropfile>,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
            hi
          `,
  },
}
