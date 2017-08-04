import { Sidebar } from '../../src'

export default {
  display          : 'Sidebar',
  to               : '/sidebar',
  demoComponentAttr: {
    header     : `<Sidebar />`,
    description: 'A simple sidebar. With sticky footer.',
    demos      : [
      <div
        style={{ height: 300, width: 300, border: '1px solid black' }}
      >
        <Sidebar
          header={'Header'}
          footer={'Footer'}
        >
                Content of sidebar.
        </Sidebar>
      </div>,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
            <Sidebar
              header={'Header'}
              footer={'Footer'}
            >
              Content of sidebar.
            </Sidebar>,
          `,
  },
}
