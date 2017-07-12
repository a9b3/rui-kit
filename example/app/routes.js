import React        from 'react'
import { Route }    from 'react-router'
import Index        from './views/index'
import Comp         from './views/comp'
import { AppShell } from '../../src'

const links = [
  {
    header: 'Components',
    items: [
      {
        display: 'one',
        to: '/',
      },
      {
        display: 'two',
        to: '/comp',
      },
    ],
  },
]

export default (
  <AppShell
    header={'UI-KIT'}
    links={links}
  >
    <Route path='/' exact component={Index} />
    <Route path='/comp' component={Comp} />
  </AppShell>
)
