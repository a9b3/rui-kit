import React             from 'react'
import { Route }         from 'react-router'
import Index             from './views/index'
import demoLinks         from './demo-configs.js'
import { DemoComponent } from '../src'
import ExampleAppShell   from './components/example-app-shell'

/**
 * @param {array.<node>} links
 * @returns {array.<Route>}
 */
function linksToRoute(links) {
  const items = links.reduce((arr, val) => {
    return arr.concat(val.items)
  }, [])

  return items.map((item, key) => {
    return <Route
      key={key}
      path={item.to}
      component={() => <DemoComponent
        {...item.demoComponentAttr}
      />}
    />
  })
}

export default (
  <ExampleAppShell
    demoLinks={demoLinks}
  >
    <Route path='/' exact component={Index} />
    {linksToRoute(demoLinks)}
  </ExampleAppShell>
)
