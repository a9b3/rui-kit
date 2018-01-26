import React                    from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import AppShell                 from 'components/AppShell'
import Example                  from 'components/Example'

import ButtonView               from 'views/Button'

export default function MainRouter() {
  return (
    <BrowserRouter>
      <AppShell>
        <Route exact path="/" component={ButtonView} />
      </AppShell>
    </BrowserRouter>
  )
}
