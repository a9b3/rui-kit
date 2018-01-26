import React                    from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import AppShell                 from 'components/AppShell'
import Example                  from 'components/Example'

import ButtonView               from 'views/Button'
import CodeView                 from 'views/Code'
import IndexView                from 'views/index'

const links = [
  {
    to: '/code',
    display: 'Code',
    exact: true,
  },
  {
    to: '/button',
    display: 'Button',
    exact: true,
  },
]

export default function MainRouter() {
  return (
    <BrowserRouter>
      <AppShell links={links}>
        <Route exact path="/" component={IndexView} />
        <Route exact path="/code" component={CodeView} />
        <Route exact path="/button" component={ButtonView} />
      </AppShell>
    </BrowserRouter>
  )
}
