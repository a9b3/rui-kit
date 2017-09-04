import styles           from './table.container.scss'
import PropTypes        from 'prop-types'

import ResizerContainer from './resizer.container.js'

@cssModule(styles, {handleNotFoundStyleName: 'ignore'})
export default class TableContainer extends React.Component {
  static propTypes = {
    columnOptions: PropTypes.arrayOf(PropTypes.shape({
      renderHeader: PropTypes.func,
      renderCell  : PropTypes.func,
      resizable   : PropTypes.bool,
    }).isRequired).isRequired,

    // Header keys.
    items      : PropTypes.arrayOf(PropTypes.any),
    borderStyle: PropTypes.string,
  }

  static defaultProps = {
    items      : [],
    borderStyle: 'thin solid',
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
      columnOptions,
    } = this.props

    const columnWidthState = []
    // Initialize column widths.
    for (let i = 0; i < columnOptions.length; i++) {
      if (!columnWidthState[i]) {
        columnWidthState[i] = 'auto'
      }
    }
    return columnWidthState
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
      columnOptions,
      items,
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
          width        : '100%',
        }}
      >
        <thead>
          <tr>
            {
              columnOptions.map((columnOption, i) => {
                return <th
                  style={{
                    position    : 'relative',
                    borderLeft  : borderStyle,
                    borderBottom: borderStyle,
                    minWidth    : columnWidthsState[i],
                    maxWidth    : columnWidthsState[i],
                    padding     : 0,
                  }}
                  key={columnOption.key}
                  ref={el => this.tableHeaderRefs[i] = el}
                >
                  {
                    columnOption.resizable && <ResizerContainer
                      onResize={(deltas) => this.onResize(deltas, i)}
                    />
                  }

                  {
                    (columnOption.renderHeader || defaultRenderHeader)({columnOption})
                  }
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
                  columnOptions.map((columnOption, j) => {
                    return <td
                      key={`${columnOption.key}-${i}-${j}`}
                      style={{
                        borderLeft  : borderStyle,
                        borderBottom: borderStyle,
                        padding     : 0,
                        position    : 'relative',
                      }}
                    >
                      {(columnOption.renderCell || defaultRenderCell)({value: item[columnOption.key]})}
                    </td>
                  })
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
  columnOption,
}) {
  return columnOption.key
}

function defaultRenderCell({
  value,
}) {
  return value
}
