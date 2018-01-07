import TableExampleStr from '!!raw-loader!./table-example.js'
import {
  Table,
  TableV2,
}                      from '../../src'
import TableExample    from './table-example.js'

/* eslint-disable react/jsx-key */
export default {
  display          : 'Table',
  to               : '/table',
  demoComponentAttr: {
    header   : `Table`,
    component: TableV2,
    demos    : [
      {
        instance       : <TableExample />,
        codeSnippet    : TableExampleStr,
        codeSnippetType: 'jsx',
      },
      {
        instance: <TableExample />,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
