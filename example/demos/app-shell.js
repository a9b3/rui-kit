import { AppShell } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'AppShell',
  to               : '/appshell',
  demoComponentAttr: {
    header     : `AppShell`,
    description: 'A sample layout.',
    component  : AppShell,
    demos      : [
      {
        instance: <AppShell
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
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
