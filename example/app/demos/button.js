import { Button } from '../../../src'
import variables  from 'esayemm-styles/variables'

function timeoutPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

/* eslint-disable react/jsx-key */
const displayName = 'Button'
export default {
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
