import React         from 'react'
import { Route }     from 'react-router'
import { Link }      from 'react-router-dom'
import { AppShell }  from '../src'
import Index         from './views/index'
import demoLinks     from './demo-configs.js'
import DemoComponent from './components/demo-component'

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

const rightNodeLinks = [
  {
    display: 'Github',
    href: 'https://github.com/esayemm/rui-kit',
  },
]

export default (
  <AppShell
    header={<Link to='/'>UI-KIT</Link>}
    links={demoLinks}
    rightNodeLinks={rightNodeLinks}
    contentWidth={'920px'}
  >
    <Route path='/' exact component={Index} />
    {linksToRoute(demoLinks)}
  </AppShell>
)
