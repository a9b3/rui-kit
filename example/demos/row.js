import { Row } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'Row',
  to               : '/row',
  demoComponentAttr: {
    header     : `<Row />`,
    description: 'A component that is basically just a flex row.',
    demos      : [
      <Row
        style={{ border: '1px solid black', height: 100 }}
        align='left'
        items={['one', 'two', 'three']}
      />,
      <Row
        style={{ border: '1px solid black', height: 100 }}
        align='center'
        items={['one', 'two', 'three']}
      />,
      <Row
        style={{ border: '1px solid black', height: 100 }}
        align='right'
        items={['one', 'two', 'three']}
      />,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
            <Row
              style={{ border: '1px solid black', height: 100 }}
              align='left'
              items={['one', 'two', 'three']}
            />
            <Row
              style={{ border: '1px solid black', height: 100 }}
              align='center'
              items={['one', 'two', 'three']}
            />
            <Row
              style={{ border: '1px solid black', height: 100 }}
              align='right'
              items={['one', 'two', 'three']}
            />
          `,
  },
}
/* eslint-enable react/jsx-key */
