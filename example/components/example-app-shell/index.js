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
      <h4>
        {location.pathname.replace('/', '') || 'React UI Kit'}
      </h4>
    </TruncateText>

    const rightNodeLinks = [
      {
        display: 'Github',
        href   : 'https://github.com/esayemm/rui-kit',
      },
    ]

    const leftNode = <Link to='/'><h4>RUI-KIT</h4></Link>

    return <AppShell
      headerNode={headerNode}
      leftNode={leftNode}
      rightNodeLinks={rightNodeLinks}
      links={demoLinks}
      contentWidth={'100%'}
    >
      {children}
    </AppShell>
  }
}
