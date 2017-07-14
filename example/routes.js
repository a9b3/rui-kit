import React        from 'react'
import { Route }    from 'react-router'
import Index        from './views/index'
import Comp         from './views/comp'
import { AppShell } from '../src'

const links = [
  {
    header: 'Components',
    items: [
      {
        display: 'Components',
        to: '/comp',
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
    header={'UI-KIT'}
    links={links}
    rightNodeLinks={rightNodeLinks}
    contentWidth={'1200px'}
  >
    <Route path='/' exact component={Index} />
    <Route path='/comp' component={Comp} />
  </AppShell>
)
