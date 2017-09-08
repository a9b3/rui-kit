import doc        from 'components/DocPage/doc'
import { Button } from '../../../src'
import variables  from 'esayemm-styles/variables'

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
          header: 'Default',
          demo  : <Button
            style={{ width: '100%'}}
            color={variables.colors.success}
          >
            Hello I am a button.
          </Button>,
        },
      ],
    },
    {
      header     : 'Button',
      description: 'Just a regular ol button.',
      sections   : [
        {
          header: 'Default',
          demo  : <Button
            style={{ width: '100%'}}
            color={variables.colors.success}
          >
            Hello I am a button.
          </Button>,
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

/* eslint-disable react/jsx-key */
const displayName = 'Button'
const x = {
  display          : displayName,
  to               : '/button',
  demoComponentAttr: {
    component  : Button,
    description: 'Just a regular ol button.',
    header     : displayName,
    demos      : [
      {
        displayName,
        instance: <Button
          style={{ width: '100%'}}
          color={variables.colors.success}
        >
          Hello I am a button.
        </Button>,
      },
      {
        displayName,
        instance: <Button
          type='outline'
          color={variables.colors.error}
        >
          Hello I am a button.
        </Button>,
      },
      {
        displayName,
        instance: <Button
          type='outline'
          color={variables.colors.warning}
          onClick={timeoutPromise}
        >
          Click will run function Default Loading Overlay
        </Button>,
      },
      {
        displayName,
        instance: <Button
          type='outline'
          color={variables.colors.success}
          onClick={timeoutPromise}
          disabled
        >
          I am disabled
        </Button>,
      },
      {
        displayName,
        instance: <Button
          color={variables.colors.error}
          onClick={timeoutPromise}
        >
          Override Loading Overlay
        </Button>,
      },
      {
        displayName,
        instance:
        <div style={{width: '100%'}}>
          <Button
            href='#'
            color={variables.colors.lightgray}
          >
            A href button
          </Button>
        </div>,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
