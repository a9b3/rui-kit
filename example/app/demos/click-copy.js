import { ClickCopy, Button } from '../../../src'

/* eslint-disable react/jsx-key */
const displayName = 'ClickCopy'
export default {
  display          : displayName,
  to               : '/click-copy',
  demoComponentAttr: {
    header     : displayName,
    component  : ClickCopy,
    description: 'Wrapper component with click to copy functionality.',
    demos      : [
      {
        displayName,
        instance: <ClickCopy
          copyText='Click this to copy.'
        >
          <Button>
            Click this to copy.
          </Button>
        </ClickCopy>,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
