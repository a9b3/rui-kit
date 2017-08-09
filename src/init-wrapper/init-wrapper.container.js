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
    this.setState({loading: true, err: null})

    const {
      init,
    } = this.props

    try {
      await init()
      this.setState({err: null, loading: false})
    } catch (err) {
      this.setState({err, loading: false})
    }
  }

  render() {
    const {
      children,
      style,
      init, // eslint-disable-line
      ...rest
    } = this.props

    const {
      err,
      loading,
    } = this.state

    return <div
      {...rest}
      style={Object.assign({}, {
        position: 'relative',
      }, style)}
    >
      {
        err && !loading && <div
          style={{

          }}
        >
          {err.message}
        </div>
      }
      {
        loading && !err && <LoadingOverlay
          show
          loadingAttr={{
            color: variables.green,
          }}
          style={{fontSize: '1.4em', backgroundColor: 'transparent'}}
        />
      }
      {
        !loading && !err && children
      }
    </div>
  }
}
