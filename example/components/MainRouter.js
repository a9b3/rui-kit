import React             from 'react'
import { Route }         from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import demoLinks         from 'demo-configs'
import Index             from 'views/index'
import ExampleAppShell   from 'components/example-app-shell'
import { DemoComponent } from '../../src'

/**
 * @param {array.<node>} links
 * @returns {array.<Route>}
 */
function linksToRoute(links) {
  const items = links.reduce((arr, val) => {
    return arr.concat(val.items)
  }, [])

  const results = items.map((item, key) => <Route
    key={key}
    path={item.to}
    component={() => <DemoComponent
      {...item.demoComponentAttr}
    />}
  />)

  return results
}

export default function MainRouter() {
  return <BrowserRouter>
    <ExampleAppShell
      demoLinks={demoLinks}
    >
      <Route path='/' exact component={Index} />
      {linksToRoute(demoLinks)}
    </ExampleAppShell>
  </BrowserRouter>
}
