import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'

@CSSModules(styles)
export default class LeftMiddleRight extends React.Component {
  static propTypes = {
    left: PropTypes.node,
    middle: PropTypes.node,
    right: PropTypes.node,
    style: PropTypes.object,
  }

  render() {
    const {
      left,
      middle,
      right,
      style,
      ...rest,
    } = this.props

    return <header
      styleName='container'
      {...rest}
      style={Object.assign({}, style)}
    >

      <section
        styleName='left'
      >
        {left}
      </section>

      <section
        styleName='middle'
      >
        {middle}
      </section>

      <section
        styleName='right'
      >
        {right}
      </section>

    </header>
  }
}
