import uuid from 'uuid'
import {
  Table,
  TableV2,
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

function renderHeader({columnOption}) {
  return <div
    style={{
      padding  : '1rem',
      textAlign: 'left',
    }}
  >
    {columnOption.key}
  </div>
}

function renderCell({value}) {
  return <div
    style={{padding: '1rem'}}
  >
    {value}
  </div>
}

export default class TableExample extends React.Component {
  render() {
    return <div style={{
      height: 500,
      width : '100%',
    }}>
      <Table
        items={items}
        columnOptions={[
          {
            key      : 'id',
            resizable: true,
            renderHeader,
            renderCell,
          },
          {
            key      : 'firstName',
            resizable: true,
            renderHeader,
            renderCell,
          },
          {
            key      : 'lastName',
            resizable: true,
            renderHeader,
            renderCell,
          },
          {
            key      : 'age',
            resizable: true,
            renderHeader,
            renderCell,
          },
        ]}
      >
      </Table>
    </div>
  }
}
