import React      from 'react'
import styles     from './index.scss'
import CSSModules from 'react-css-modules'
import {
  Loading,
}                 from '../../../../src'

@CSSModules(styles)
export default class Index extends React.Component {
  render() {
    return <div styleName='index'>
      <Loading
        type={'pulse'}
        show
      />
    </div>
  }
}
