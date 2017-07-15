import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'
import {
  Loading,
  Code,
} from '../../../src'
import * as textFormat from 'services/text-format'

@CSSModules(styles)
export default class LoadingView extends React.Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  state = {

  }

  render() {
    const {
      ...rest,
    } = this.props

    return <div
      styleName='container'
    >

      <div style={{ fontSize: '40px' }}>
        <Loading
          show
          color='#000000'
        />
      </div>

      <Code type='html'>
        {textFormat.alignText(`
          <Loading
            show
            color='#000000'
          />
        `)}
      </Code>

    okok
      Hello World!
    </div>
  }
}
