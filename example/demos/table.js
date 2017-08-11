import {
  Table,
} from '../../src'

const items = [
  {
    id       : '1',
    firstName: 'sam',
    lastName : 'sam',
    age      : 10,
  },
  {
    id       : '2',
    firstName: 'joe',
    lastName : 'joe',
    age      : 20,
  },
]

class TableExample extends React.Component {
  render() {
    return <Table
      tableHeaders={[
        'id',
        'firstName',
        'lastName',
        'age',
      ]}
      items={items}
    >
    </Table>
  }
}

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
