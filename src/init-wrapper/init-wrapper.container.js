import React            from 'react'
import PropTypes        from 'prop-types'
import variables        from 'esayemm-styles/variables'

import {LoadingOverlay} from '../index.js'

export default class InitWrapperContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    init    : PropTypes.func.isRequired,
    style   : PropTypes.object,
  }

  state = {
    loading: false,
    err    : null,
  }

  async componentWillMount() {
    await this.initialize()
  }

  initialize = async () => {
    this.setState({loading: true})

    const {
      init,
    } = this.props

    try {
      await init()
    } catch (err) {
      this.setState({err})
    }
    this.setState({loading: false})
  }

  render() {
    const {
      children,
      style,
      init, // eslint-disable-line
      ...rest
    } = this.props

    const {
      loading,
    } = this.state

    return <div
      {...rest}
      style={Object.assign({}, {
        position: 'relative',
      }, style)}
    >
      {
        loading
          ? <LoadingOverlay
            show
            loadingAttr={{
              color: variables.green,
            }}
            style={{fontSize: '1.4em', backgroundColor: 'transparent'}}
          />
          : children
      }
    </div>
  }
}
