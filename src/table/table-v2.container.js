import styles    from './table-v2.container.scss'
import PropTypes from 'prop-types'

@cssModule(styles, {handleNotFoundStyleName: 'ignore'})
export default class TableContainer extends React.Component {
  static propTypes = {
    columnOptions: PropTypes.arrayOf(PropTypes.shape({
      renderHeader: PropTypes.func,
      renderCell  : PropTypes.func,
    }).isRequired).isRequired,
    items      : PropTypes.arrayOf(PropTypes.any),
    borderStyle: PropTypes.string,
  }

  static defaultProps = {
    items      : [],
    borderStyle: 'thin solid',
  }

  render() {
    const {
      columnOptions,
      items,
      ...rest
    } = this.props

    return <div
      {...rest}
    >
      {/* Header */}
      <div>
      </div>
      hi
    </div>
  }
}
