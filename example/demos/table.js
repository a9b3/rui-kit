import TableExample from './table-example.js'
import TableExampleStr from '!!raw-loader!./table-example.js'

/* eslint-disable react/jsx-key */
export default {
  display          : 'Table',
  to               : '/table',
  demoComponentAttr: {
    header: `<Table />`,
    demos : [
      {
        instance       : <TableExample />,
        codeSnippet    : TableExampleStr,
        codeSnippetType: 'jsx',
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
