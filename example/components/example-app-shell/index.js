import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'
import {
  Link,
  withRouter,
}                 from 'react-router-dom'
import {
  AppShell,
  TruncateText,
}                 from '../../../src'

@withRouter
@CSSModules(styles)
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

    const headerNode = <TruncateText
      key={location.key}
      className={styles['middle-title']}
    >
      {location.pathname.replace('/', '') || 'React UI Kit'}
    </TruncateText>

    const rightNodeLinks = [
      {
        display: 'Github',
        href   : 'https://github.com/esayemm/rui-kit',
      },
    ]

    const leftNode = <Link to='/'>RUI-KIT</Link>

    return <AppShell
      headerNode={headerNode}
      leftNode={leftNode}
      rightNodeLinks={rightNodeLinks}
      links={demoLinks}
      contentWidth={'920px'}
    >
      {children}
    </AppShell>
  }
}
