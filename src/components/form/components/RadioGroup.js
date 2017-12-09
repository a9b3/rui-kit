import cx        from 'classnames'
import PropTypes from 'prop-types'
import React     from 'react'

export default class RadioGroup extends React.Component {
  static propTypes = {
    name     : PropTypes.string,
    Component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
  }

  render() {
    const {
      Component,
      children,
      ...rest
    } = this.props

    return <Component {...rest}>{children}</Component>
  }
}
