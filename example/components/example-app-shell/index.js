import styles     from './index.scss'
import React      from 'react'
import PropTypes  from 'prop-types'
import {
  Link,
  withRouter,
}                 from 'react-router-dom'
import {
  AppShell,
  RuiTheme,
}                 from '../../../src'

@withRouter
export default class ExampleAppShell extends React.Component {
  static propTypes = {
    demoLinks: PropTypes.any,
    location : PropTypes.object.isRequired,
    children : PropTypes.node.isRequired,
  }

  render() {
    const {
      location,
      demoLinks,
      children,
    } = this.props

    const headerNode = <div
      key={location.key}
      className={styles['middle-title']}
    >
      <h4>
        {location.pathname.replace('/', '') || 'React UI Kit'}
      </h4>
    </div>

    const rightNodeLinks = [
      {
        display: <img style={{height: '1.2em'}} src={require('./github.png')} alt='Github' />,
        href   : 'https://github.com/esayemm/rui-kit',
      },
    ]

    const leftNode = <Link to='/'><h4>RUI-KIT</h4></Link>

    return <RuiTheme>
      <AppShell
        headerNode={headerNode}
        leftNode={leftNode}
        rightNodeLinks={rightNodeLinks}
        links={demoLinks}
        contentWidth={'100%'}
      >
        {children}
      </AppShell>
    </RuiTheme>
  }
}
