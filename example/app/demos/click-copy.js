import { ClickCopy, Button } from '../../../src'
import doc                   from 'components/DocPage/doc'

export default doc({
  display  : 'ClickCopy',
  to       : '/click-copy',
  component: ClickCopy,
  sections : [
    {
      header     : 'ClickCopy',
      description: 'Wrapper component with click to copy functionality.',
      sections   : [
        {
          demo: <ClickCopy
            copyText='Click this to copy.'
          >
            Click this to copy.
          </ClickCopy>,
        },
        {
          demo: <ClickCopy
            copyText='Click this to copy.'
          >
            <Button>
            Click this to copy.
            </Button>
          </ClickCopy>,
        },
      ],
    },
  ],
})
