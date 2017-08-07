import { LeftMiddleRight } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'LeftMiddleRight',
  to               : '/left-middle-right',
  demoComponentAttr: {
    header     : `<LeftMiddleRight />`,
    description: 'A header with left, middle and right nodes.',
    demos      : [
      <LeftMiddleRight
        style={{
          border : '1px solid black',
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
    codeSnippet    : `
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
}
/* eslint-enable react/jsx-key */
