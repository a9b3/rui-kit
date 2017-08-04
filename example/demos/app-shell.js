import React        from 'react'
import { AppShell } from '../../src'

export default {
  display          : 'AppShell',
  to               : '/appshell',
  demoComponentAttr: {
    header     : `<AppShell />`,
    description: 'A sample layout.',
    demos      : [
      <AppShell
        style={{
          border: '1px solid black',
          height: '200px',
        }}
        headerNode={<div>Header</div>}
        leftNode={<div>Hi</div>}
        links={[
          {
            header: 'test',
            items : [
              {
                display: 'cool',
                to     : '#',
              },
            ],
          },
        ]}
      >
              hi
      </AppShell>,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
            <AppShell
              style={{
                border: '1px solid black',
                height: '200px',
              }}
              headerNode={<div>Header</div>}
              leftNode={<div>Hi</div>}
              links={[
                {
                  header: 'test',
                  items: [
                    {
                      display: 'cool',
                      to: '#',
                    },
                  ],
                },
              ]}
            >
              hi
            </AppShell>
          `,
  },
}
