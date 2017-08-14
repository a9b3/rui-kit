import styles           from './table.container.scss'
import PropTypes        from 'prop-types'

import ResizerContainer from './resizer.container.js'

@cssModule(styles, {handleNotFoundStyleName: 'ignore'})
export default class TableContainer extends React.Component {
  static propTypes = {
    columnOptions: PropTypes.shape({
      renderHeader: PropTypes.func,
      renderCell  : PropTypes.func,
      resizable   : PropTypes.bool,
    }),

    // Header keys.
    tableHeaders: PropTypes.arrayOf(PropTypes.any),
    items       : PropTypes.arrayOf(PropTypes.any),
    columnWidths: PropTypes.arrayOf(PropTypes.number),
    renderHeader: PropTypes.func,
    renderCell  : PropTypes.func,
    resizable   : PropTypes.object,
    borderStyle : PropTypes.string,
  }

  static defaultProps = {
    tableHeaders: [],
    items       : [],
    columnWidths: [],
    renderHeader: defaultRenderHeader,
    renderCell  : defaultRenderCell,
    resizable   : {},
    borderStyle : 'thin solid',
  }

  // Reference to the table headers dom elements.
  tableHeaderRefs = []

  state = {
    // Use this to resize column widths.
    columnWidthsState: [],
  }

  componentWillMount() {
    this.setState({columnWidthsState: this.initColumnWidths()})
  }

  initColumnWidths = () => {
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
    return columnWidths
  }

  onResize = ({deltaX, initialEvent}, index) => {
    const {columnWidthsState} = this.state
    if (typeof columnWidthsState[index] !== 'number') {
      columnWidthsState[index] = initialEvent.target.parentNode.offsetWidth
    }
    columnWidthsState[index] += deltaX
    this.setState({columnWidthsState})
  }

  render() {
    const {
      tableHeaders,
      items,
      columnWidths, // eslint-disable-line
      renderHeader,
      renderCell,
      resizable,
      borderStyle,
      ...rest
    } = this.props
    const {
      columnWidthsState,
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
        }}
      >
        <thead>
          <tr>
            {
              tableHeaders.map((th, i) => {
                return <th
                  style={{
                    position    : 'relative',
                    borderLeft  : borderStyle,
                    borderBottom: borderStyle,
                    minWidth    : columnWidthsState[i],
                    maxWidth    : columnWidthsState[i],
                    padding     : 0,
                  }}
                  key={i}
                  ref={el => this.tableHeaderRefs[i] = el}
                >
                  {
                    resizable[th] && <ResizerContainer
                      onResize={(deltas) => this.onResize(deltas, i)}
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
                      borderLeft  : borderStyle,
                      borderBottom: borderStyle,
                      padding     : 0,
                      position    : 'relative',
                    }}
                  >
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
