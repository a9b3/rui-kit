import styles           from './table.container.scss'
import PropTypes        from 'prop-types'

import ResizerContainer from './resizer.container.js'

@cssModule(styles, {handleNotFoundStyleName: 'ignore'})
export default class TableContainer extends React.Component {
  static propTypes = {
    tableHeaders: PropTypes.arrayOf(PropTypes.any),
    items       : PropTypes.arrayOf(PropTypes.any),
    columnWidths: PropTypes.arrayOf(PropTypes.number),
    renderHeader: PropTypes.func,
    renderCell  : PropTypes.func,
    resizable   : PropTypes.object,
  }

  static defaultProps = {
    tableHeaders: [],
    items       : [],
    columnWidths: [],
    tableWidth  : '100%',
    renderHeader: defaultRenderHeader,
    renderCell  : defaultRenderCell,
    resizable   : {},
  }

  tableHeaderRefs = []

  state = {
    columnWidthsState   : [],
    calculatedTableWidth: '100%',
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
    this.setState({columnWidthsState: columnWidths})
  }

  componentDidMount() {
    console.log(this.tableHeaderRefs)
    const sum = this.tableHeaderRefs.reduce((sum, ref) => {
      sum += ref.offsetWidth
      return sum
    }, 0)
    this.setState({
      calculatedTableWidth: sum,
    })
  }

  resizeColumn = ({deltaX, initialEvent}, index) => {
    const {columnWidthsState, calculatedTableWidth} = this.state
    if (typeof columnWidthsState[index] !== 'number') {
      columnWidthsState[index] = initialEvent.target.parentNode.offsetWidth
    }
    columnWidthsState[index] += deltaX
    const newCalculatedTableWidth = calculatedTableWidth + deltaX
    this.setState({columnWidthsState, calculatedTableWidth: newCalculatedTableWidth})
  }

  render() {
    const {
      tableHeaders,
      items,
      columnWidths, // eslint-disable-line
      renderHeader,
      renderCell,
      resizable,
      ...rest
    } = this.props
    const {
      columnWidthsState,
      tableWidth,
      calculatedTableWidth,
    } = this.state

    return <div
      style={{
        width   : '100%',
        height  : '100%',
        overflow: 'auto',
      }}
      {...rest}
    >
      <table
        styleName='table'
        style={{
          border       : '0',
          borderSpacing: '0',
          width        : `${calculatedTableWidth}`,
        }}
      >
        <thead>
          <tr>
            {
              tableHeaders.map((th, i) => {
                return <th
                  styleName='header'
                  style={{
                    minWidth: columnWidthsState[i],
                    maxWidth: columnWidthsState[i],
                    padding : 0,
                  }}
                  key={i}
                  ref={el => this.tableHeaderRefs[i] = el}
                >
                  {
                    resizable[th] && <ResizerContainer
                      onResize={(deltas) => this.resizeColumn(deltas, i)}
                    />
                  }
                  {renderHeader({value: th})}
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
                    style={{
                      padding : 0,
                      position: 'relative',
                    }}
                  >
                    {/* <ResizerContainer */}
                    {/*   onResize={(deltas) => this.resizeColumn(deltas, j)} */}
                    {/* /> */}
                    {renderCell({key, value: item[key]})}
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

function defaultRenderHeader({
  value,
}) {
  return value
}

function defaultRenderCell({
  value,
}) {
  return value
}
