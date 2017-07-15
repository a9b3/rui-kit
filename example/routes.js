import React        from 'react'
import { Route }    from 'react-router'
import Index        from './views/index'
import CodeView     from './views/code'
import ButtonView   from './views/button'
import LoadingView  from './views/loading'
import { AppShell } from '../src'
import { Link }     from 'react-router-dom'

const links = [
  {
    header: 'Components',
    items: [
      {
        display: 'Code',
        to: '/code',
      },
      {
        display: 'Button',
        to: '/button',
      },
      {
        display: 'Loading',
        to: '/loading',
      },
    ],
  },
]

const rightNodeLinks = [
  {
    display: 'Github',
    href: 'https://github.com/esayemm/rui-kit',
  },
]

export default (
  <AppShell
    header={<Link to='/'>UI-KIT</Link>}
    links={links}
    rightNodeLinks={rightNodeLinks}
    contentWidth={'920px'}
  >
    <Route path='/' exact component={Index} />
    <Route path='/code' component={CodeView} />
    <Route path='/button' component={ButtonView} />
    <Route path='/loading' component={LoadingView} />
  </AppShell>
)
