import TableExample from './table-example.js'

/* eslint-disable react/jsx-key */
export default {
  display          : 'Table',
  to               : '/table',
  demoComponentAttr: {
    header: `<Table />`,
    demos : [
      <TableExample />,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
            <Table>
              {'hi'}
            </Table>
          `,
  },
}
/* eslint-enable react/jsx-key */
