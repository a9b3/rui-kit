import { Button } from '../../src'
import variables  from 'esayemm-styles/variables'

function timeoutPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

/* eslint-disable react/jsx-key */
export default {
  display          : 'Button',
  to               : '/button',
  demoComponentAttr: {
    component: Button,
    header   : `<Button />`,
    demos    : [
      {
        instance: <Button
          style={{ width: '100%', margin: '1rem 0' }}
          color={variables.green2}
        >
        Hello I am a button.
        </Button>,
      },
      {
        instance: <Button
          type='outline'
          style={{ margin: '1rem 0' }}
          color={variables.red1}
        >
          Hello I am a button.
        </Button>,
      },
      {
        instance: <Button
          type='outline'
          style={{ margin: '1rem 0' }}
          color={variables.yellow3}
          onClick={timeoutPromise}
        >
          Click will run function Default Loading Overlay
        </Button>,
      },
      {
        instance: <Button
          type='outline'
          style={{ margin: '1rem 0' }}
          color={variables.yellow3}
          onClick={timeoutPromise}
          disabled
        >
          I am disabled
        </Button>,
      },
      {
        instance: <Button
          type='outline'
          style={{ margin: '1rem 0' }}
          color={variables.red1}
          onClick={timeoutPromise}
          loadingOverlayAttr={{ style: {backgroundColor: variables.blue3},  loadingAttr: { color: variables.pink3 } }}
        >
        Override Loading Overlay
        </Button>,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
