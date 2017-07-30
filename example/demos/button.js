import { Button } from '../../src'

function timeoutPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

export default {
  display: 'Button',
  to: '/button',
  demoComponentAttr: {
    header: `<Button />`,
    demos: [
      <Button>
              Hello I am a button.
      </Button>,

      <Button
        style={{
          display: 'block',
        }}
        type='outline'
        color='#ff0000'
      >
              Hello I am a button.
      </Button>,

      <Button
        style={{
          display: 'block',
        }}
        type='outline'
        color='#ff0000'
        onClick={timeoutPromise}
      >
              Click will run function Default Loading Overlay
      </Button>,

      <Button
        style={{
          display: 'block',
        }}
        type='outline'
        color='#ff0000'
        onClick={timeoutPromise}
        loadingOverlayAttr={{ style: {backgroundColor: 'blue'},  loadingAttr: { color: 'green' } }}
      >
              Override Loading Overlay
      </Button>,
    ],
    codeSnippetType: 'html',
    codeSnippet: `
            <Button>
              Hello I am a button.
            </Button>

            <Button
              style={{
                display: 'block',
              }}
              type='outline'
              color='#ff0000'
            >
              Hello I am a button.
            </Button>

            <Button
              style={{
                display: 'block',
              }}
              type='outline'
              color='#ff0000'
              onClick={timeoutPromise}
              loadingOverlayAttr={{ style: {backgroundColor: 'blue'},  loadingAttr: { color: 'green' } }}
            >
              On Click is an async function
            </Button>
          `,
  },
}
