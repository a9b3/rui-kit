import tinycolor    from 'tinycolor2'
import variables    from 'esayemm-styles/variables'

import { AppShell } from '../../../src'

/* eslint-disable react/jsx-key */
const displayName = 'AppShell'
export default {
  display          : displayName,
  to               : '/appshell',
  demoComponentAttr: {
    header     : displayName,
    description: 'A sample layout.',
    component  : AppShell,
    demos      : [
      {
        displayName,
        instance: <AppShell
          style={{
            border: `1px solid ${tinycolor(variables.colors.secondary).setAlpha(.2)}`,
            height: '300px',
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
