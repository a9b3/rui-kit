import PropTypes from 'prop-types'
import React     from 'react'

export default class SelectField extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    value: PropTypes.string,
  }
  render() {
    const {options, ...rest} = this.props

    const optionsElems = [<option key={'default'} />]
      .concat(
        options.map(
          ({label, value}, i) => (
            <option
              key={i}
              value={value}
            >
              {label}
            </option>
          )
        )
      )

    return (
      <select {...rest}>
        {optionsElems}
      </select>
    )
  }
}
