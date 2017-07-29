import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'
import {
  Link,
  withRouter
}                 from 'react-router-dom'
import {
  AppShell,
  TruncateText,
}                 from '../../../src'
import demoLinks  from '../../demo-configs.js'

const rightNodeLinks = [
  {
    display: 'Github',
    href: 'https://github.com/esayemm/rui-kit',
  },
]

@withRouter
@CSSModules(styles)
export default class ExampleAppShell extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
  }

  render() {
    const {
      location,
    } = this.props

    const headerNode = <TruncateText
      key={location.key}
      className={styles['middle-title']}
    >
      {location.pathname.replace('/', '') || 'React UI Kit'}
    </TruncateText>

    return <AppShell
      headerNode={headerNode}
      leftNode={<Link to='/'>UI-KIT</Link>}
      links={demoLinks}
      rightNodeLinks={rightNodeLinks}
      contentWidth={'920px'}
    >
      {this.props.children}
    </AppShell>
  }
}
