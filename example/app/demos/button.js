import variables  from 'esayemm-styles/variables'

import { Button } from '../../../src'
import doc        from 'components/DocPage/doc'

export default doc({
  component: Button,
  to       : '/button',
  display  : 'Button',
  sections : [
    {
      header     : 'Button',
      description: 'Just a regular ol button.',
      sections   : [
        {
          header: <h4>Example</h4>,
          demo  : <Button
            style={{ width: '100%'}}
            color={variables.colors.success}
          >
            Hello I am a button.
          </Button>,
          overrideDemo: {
            displayName: 'Button',
          },
        },
        {
          header: <h4>Outline</h4>,
          demo  : <Button
            type='outline'
            color={variables.colors.error}
          >
            Hello I am a button.
          </Button>,
          description : 'You can change the style of the button to outline by providing it to the prop type.',
          overrideDemo: {
            displayName: 'Button',
          },
        },
        {
          header: <h4>Async onClick</h4>,
          demo  : <Button
            type='outline'
            color={variables.colors.warning}
            onClick={timeoutPromise}
          >
            Click will run function Default Loading Overlay
          </Button>,
          overrideDemo: {
            displayName: 'Button',
          },
        },
        {
          header: <h4>Disabled</h4>,
          demo  : <Button
            type='outline'
            color={variables.colors.success}
            disabled
          >
            I am disabled
          </Button>,
          overrideDemo: {
            displayName: 'Button',
          },
        },
        {
          header: <h4>Different Color</h4>,
          demo  : <Button
            color={variables.colors.error}
            onClick={timeoutPromise}
          >
            Override Loading Overlay
          </Button>,
          overrideDemo: {
            displayName: 'Button',
          },
        },
        {
          header: <h4>Href</h4>,
          demo  : <div style={{width: '100%'}}>
            <Button
              href='#'
              color={variables.colors.lightgray}
            >
              A href button
            </Button>
          </div>,
          overrideDemo: {
            displayName: 'Button',
          },
        },
      ],
    },
  ],
})

function timeoutPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}
