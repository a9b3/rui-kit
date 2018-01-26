import React                    from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import AppShell                 from 'components/AppShell'
import Example                  from 'components/Example'

import ButtonView               from 'views/Button'

const links = [
  {
    to: '/',
    display: 'Button',
  },
]

export default function MainRouter() {
  return (
    <BrowserRouter>
      <AppShell links={links}>
        <Route exact path="/" component={ButtonView} />
      </AppShell>
    </BrowserRouter>
  )
}
