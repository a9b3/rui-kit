import uuid from 'uuid'
import {
  Table,
} from '../../src'

function createItems(amt) {
  const items = []
  for (let i = 0; i < amt; i++) {
    items.push({
      id       : uuid.v4(),
      firstName: 'sam',
      lastName : 'lau',
      age      : 10,
    })
  }
  return items
}

const items = createItems(100)

export default class TableExample extends React.Component {
  render() {
    return <div style={{
      height: 500,
      width : '100%',
    }}>
      <Table
        tableHeaders={[
          'id',
          'firstName',
          'lastName',
          'age',
        ]}
        items={items}
        renderHeader={({value}) => {
          return <div
            style={{
              padding  : '1rem',
              textAlign: 'left',
            }}
          >
            {value}
          </div>
        }}
        renderCell={({value}) => {
          return <div style={{
            padding: '1rem',
          }}>
            {value}
          </div>
        }}

        columnOptions={[
          {
            key: 'id',
            renderHeader() {

            },
            renderCell() {

            },
            resizable: true,
          },
        ]}
      >
      </Table>
    </div>
  }
}
