import React     from 'react'
import { Route } from 'react-router'
import Index     from './views/index'
import Comp     from './views/comp'
import AppShell  from './components/app-shell'

export default (
  <AppShell>
    <Route path='/' exact component={Index} />
    <Route path='/comp' component={Comp} />
  </AppShell>
)
