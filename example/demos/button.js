import { Button } from '../../src'
import variables  from 'esayemm-styles/variables'

function timeoutPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

export default {
  display          : 'Button',
  to               : '/button',
  demoComponentAttr: {
    header: `<Button />`,
    demos : [
      <Button
        style={{ width: '100%', margin: '1rem 0' }}
        color={variables.green2}
      >
        Hello I am a button.
      </Button>,

      <Button
        type='outline'
        style={{ margin: '1rem 0' }}
        color={variables.red1}
      >
        Hello I am a button.
      </Button>,

      <Button
        type='outline'
        style={{ margin: '1rem 0' }}
        color={variables.yellow3}
        onClick={timeoutPromise}
      >
        Click will run function Default Loading Overlay
      </Button>,

      <Button
        type='outline'
        style={{ margin: '1rem 0' }}
        color={variables.red1}
        onClick={timeoutPromise}
        loadingOverlayAttr={{ style: {backgroundColor: variables.blue3},  loadingAttr: { color: variables.pink3 } }}
      >
        Override Loading Overlay
      </Button>,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
      <Button
        style={{ width: '100%' }}
        color={variables.green2}
      >
        Hello I am a button.
      </Button>,

      <Button
        type='outline'
        color={variables.red1}
      >
        Hello I am a button.
      </Button>,

      <Button
        type='outline'
        color={variables.yellow3}
        onClick={timeoutPromise}
      >
        Click will run function Default Loading Overlay
      </Button>,

      <Button
        type='outline'
        color={variables.red1}
        onClick={timeoutPromise}
        loadingOverlayAttr={{ style: {backgroundColor: variables.blue3},  loadingAttr: { color: variables.pink3 } }}
      >
        Override Loading Overlay
      </Button>,
          `,
  },
}
