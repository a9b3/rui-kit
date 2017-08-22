import { ClickCopy } from '../../src'

/* eslint-disable react/jsx-key */
const displayName = 'ClickCopy'
export default {
  display          : displayName,
  to               : '/click-copy',
  demoComponentAttr: {
    header     : displayName,
    component  : ClickCopy,
    description: 'Click to copy.',
    demos      : [
      {
        instance: <ClickCopy
          copyText='what'
        >
          Click to copy.
        </ClickCopy>,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
