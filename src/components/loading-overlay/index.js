import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'
import Loading    from '../loading'

@CSSModules(styles)
export default class LoadingOverlay extends React.Component {
  static propTypes = {
    show: PropTypes.bool,
    loadingAttr: PropTypes.object,
  }

  render() {
    const {
      loadingAttr,
      show,
      ...rest,
    } = this.props

    if (!show) {
      return null
    }

    return <div
      styleName='container'
      {...rest}
    >
      <Loading
        {...loadingAttr}
        show={show}
      />
    </div>
  }
}
