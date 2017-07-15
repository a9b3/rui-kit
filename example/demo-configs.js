import {
  Code,
  Button,
  Loading,
  LoadingOverlay,
} from '../src'

export default [
  {
    header: 'Components',
    items: [
      {
        display: 'Code',
        to: '/code',
        demoComponentAttr: {
          header: `<Code />`,
          demos: [
            <Code>
              {'hi'}
            </Code>,
          ],
          codeSnippetType: 'html',
          codeSnippet: `
            <Code>
              {'hi'}
            </Code>
          `,
        },
      },
      {
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
            </Button>,
          `,
        },
      },
      {
        display: 'Loading',
        to: '/loading',
        demoComponentAttr: {
          header: `<Loading />`,
          demos: [
            <div style={{ fontSize: '40px' }}>
              <Loading
                show
                color='#000000'
              />
            </div>,
          ],
          codeSnippetType: 'html',
          codeSnippet: `
            <div style={{ fontSize: '40px' }}>
              <Loading
                show
                color='#000000'
              />
            </div>
          `,
        },
      },
      {
        display: 'LoadingOverlay',
        to: '/loading-overlay',
        demoComponentAttr: {
          header: `<LoadingOverlay />`,
          description: 'A loading overlay, this component has absolute position so be sure to put it in a parent element with relative position.',
          demos: [
            <div style={{
              border: '1px solid black',
              height: 300,
              fontSize: '40px',
              position: 'relative',
            }}>
              <LoadingOverlay show />
            </div>,
          ],
          codeSnippetType: 'html',
          codeSnippet: `
            <div style={{
              border: '1px solid black',
              height: 300,
              fontSize: '40px',
              position: 'relative',
            }}>
              <LoadingOverlay show />
            </div>
          `,
        },
      },
    ],
  },
]
