import styles           from './table.container.scss'
import PropTypes        from 'prop-types'

import ResizerContainer from './resizer.container.js'

@cssModule(styles)
export default class TableContainer extends React.Component {
  static propTypes = {
    tableHeaders: PropTypes.arrayOf(PropTypes.any),
    items       : PropTypes.arrayOf(PropTypes.any),
  }

  static defaultProps = {
    tableHeaders: [],
    items       : [],
  }

  state = {
    columnWidths: [],
  }

  componentWillMount() {
    const {
      tableHeaders,
    } = this.props

    // Initialize column widths.
    const columnWidths = []
    for (let i = 0; i < tableHeaders.length; i++) {
      columnWidths[i] = 100
    }
    this.setState({columnWidths})
  }

  resizeColumn = ({deltaX}, index) => {
    const {columnWidths} = this.state
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
      <table style={{background: 'yellow'}}>
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
              return <tr key={i}>
                {tableHeaders.map((key, j) => <td key={j}>{item[key]}</td>)}
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  }
}
