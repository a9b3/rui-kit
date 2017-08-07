import { HoverDisplay } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'HoverDisplay',
  to               : '/hover-display',
  demoComponentAttr: {
    header: `<HoverDisplay />`,
    demos : [
      <HoverDisplay
        style={{background: 'yellow', padding: '1rem'}}
        content={
          <div style={{background: 'blue', height: '200px', width: '200px'}}>
            Content
          </div>
        }
      >
        Hover over me to display content
      </HoverDisplay>,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
            <HoverDisplay>
              {'hi'}
            </HoverDisplay>
          `,
  },
}
/* eslint-enable react/jsx-key */
