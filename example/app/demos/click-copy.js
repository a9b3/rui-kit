import doc                   from 'components/DocPage/doc'
import { ClickCopy, Button } from '../../../src'

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
