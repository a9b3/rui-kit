import styles           from './table.container.scss'
import PropTypes        from 'prop-types'

import ResizerContainer from './resizer.container.js'

@cssModule(styles)
export default class TableContainer extends React.Component {
  static propTypes = {
    tableHeaders: PropTypes.arrayOf(PropTypes.any),
    items       : PropTypes.arrayOf(PropTypes.any),
    columnWidths: PropTypes.arrayOf(PropTypes.number),
  }

  static defaultProps = {
    tableHeaders: [],
    items       : [],
    columnWidths: [],
  }

  state = {
    columnWidths: [],
  }

  componentWillMount() {
    const {
      tableHeaders,
      columnWidths,
    } = this.props

    // Initialize column widths.
    for (let i = 0; i < tableHeaders.length; i++) {
      if (!columnWidths[i]) {
        columnWidths[i] = 'auto'
      }
    }
    this.setState({columnWidths})
  }

  resizeColumn = ({deltaX, initialEvent}, index) => {
    const {columnWidths} = this.state
    if (typeof columnWidths[index] !== 'number') {
      columnWidths[index] = initialEvent.target.parentNode.offsetWidth
    }
    columnWidths[index] += deltaX
    this.setState({columnWidths})
  }

  render() {
    const {
      tableHeaders,
      items,
      ...rest
    } = this.props
    const {
      columnWidths,
    } = this.state

    return <div style={{width: '100%', overflow: 'auto'}}
      {...rest}
    >
      <table style={{border: '0', borderSpacing: '0'}}>
        <thead>
          <tr>
            {
              tableHeaders.map((th, i) => {
                return <th
                  styleName='header'
                  style={{minWidth: columnWidths[i], maxWidth: columnWidths[i]}}
                  key={i}
                >
                  <ResizerContainer onResize={(deltas) => this.resizeColumn(deltas, i)}/>
                  {th}
                </th>
              })
            }
          </tr>
        </thead>

        <tbody>
          {
            items.map((item, i) => {
              return <tr
                key={i}
              >
                {
                  tableHeaders.map((key, j) => <td
                    key={j}
                    style={{border: '1px solid black', position: 'relative'}}
                  >
                    <ResizerContainer onResize={(deltas) => this.resizeColumn(deltas, j)}/>
                    {item[key]}
                  </td>)
                }
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  }
}
