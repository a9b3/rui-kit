import {
  Code,
  Button,
  Loading,
  LoadingOverlay,
  LeftMiddleRight,
  Row,
  FillParent,
  Sidebar,
  Dropdown,
} from '../src'

function timeoutPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

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
      {
        display: 'LeftMiddleRight',
        to: '/left-middle-right',
        demoComponentAttr: {
          header: `<LeftMiddleRight />`,
          description: 'A header with left, middle and right nodes.',
          demos: [
            <LeftMiddleRight
              style={{
                border: '1px solid black',
                padding: '1rem',
              }}
              left={
                <div>
                  Left
                </div>
              }
              middle={
                <div>
                  Middle
                </div>
              }
              right={
                <div>
                  Right
                </div>
              }
            />,
          ],
          codeSnippetType: 'html',
          codeSnippet: `
            <LeftMiddleRight
              style={{
                border: '1px solid black',
                padding: '1rem',
              }}
              left={
                <div>
                  Left
                </div>
              }
              middle={
                <div>
                  Middle
                </div>
              }
              right={
                <div>
                  Right
                </div>
              }
            />
          `,
        },
      },
      {
        display: 'Row',
        to: '/row',
        demoComponentAttr: {
          header: `<Row />`,
          description: 'A component that is basically just a flex row.',
          demos: [
            <Row
              align='left'
              items={['one', 'two', 'three']}
            />,
            <Row
              align='center'
              items={['one', 'two', 'three']}
            />,
            <Row
              align='right'
              items={['one', 'two', 'three']}
            />,
          ],
          codeSnippetType: 'html',
          codeSnippet: `
            <Row
              align='left'
              items={['one', 'two', 'three']}
            />,
            <Row
              align='center'
              items={['one', 'two', 'three']}
            />,
            <Row
              align='right'
              items={['one', 'two', 'three']}
            />,
          `,
        },
      },
      {
        display: 'FillParent',
        to: '/fill-parent',
        demoComponentAttr: {
          header: `<FillParent />`,
          description: 'A simple component that just fills parent.',
          demos: [
            <div style={{ height: 100, width: 300, border: '1px solid black' }}>
              <FillParent>
                Hello
              </FillParent>
            </div>,
            <div style={{ height: 100, width: 300, border: '1px solid black' }}>
              <FillParent style={{ background: 'yellow' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
                velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
                volutpat sit amet.
              </FillParent>
            </div>,
          ],
          codeSnippetType: 'html',
          codeSnippet: `
            <div style={{ height: 100, width: 300, border: '1px solid black' }}>
              <FillParent>
                Hello
              </FillParent>
            </div>,
            <div style={{ height: 100, width: 300, border: '1px solid black' }}>
              <FillParent style={{ background: 'yellow' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
                velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
                volutpat sit amet.
              </FillParent>
            </div>,
          `,
        },
      },
      {
        display: 'Sidebar',
        to: '/sidebar',
        demoComponentAttr: {
          header: `<Sidebar />`,
          description: 'A simple sidebar. With sticky footer.',
          demos: [
            <div
              style={{ height: 300, width: 300, border: '1px solid black' }}
            >
              <Sidebar
                header={'Header'}
                footer={'Footer'}
              >
                Content of sidebar.
              </Sidebar>
            </div>,
          ],
          codeSnippetType: 'html',
          codeSnippet: `
            <Sidebar
              header={'Header'}
              footer={'Footer'}
            >
              Content of sidebar.
            </Sidebar>,
          `,
        },
      },
      {
        display: 'Dropdown',
        to: '/dropdown',
        demoComponentAttr: {
          header: `<Dropdown />`,
          description: 'Dropdown component.',
          demos: [
            <Dropdown
              header={'Click to Close'}
            >
              <div>
                Child
              </div>
              <div>
                Child2
              </div>
              <div>
                Child3
              </div>
            </Dropdown>,
          ],
          codeSnippetType: 'html',
          codeSnippet: `
            <Dropdown
              header={'Click to Close'}
            >
              <div>
                Child
              </div>
              <div>
                Child2
              </div>
              <div>
                Child3
              </div>
            </Dropdown>
          `,
        },
      },
    ],
  },
]
