import { Sidebar } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'Sidebar',
  to               : '/sidebar',
  demoComponentAttr: {
    header     : `<Sidebar />`,
    component: Sidebar,
    description: 'A simple sidebar. With sticky footer.',
    demos      : [
      {
        instance: <div
          style={{ height: 300, width: 300, border: '1px solid black' }}
        >
          <Sidebar
            header={'Header'}
            footer={'Footer'}
          >
                Content of sidebar.
          </Sidebar>
        </div>,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
