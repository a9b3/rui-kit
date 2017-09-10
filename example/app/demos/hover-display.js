import doc                     from 'components/DocPage/doc'
import {Link}                  from 'react-router-dom'
import variables               from 'esayemm-styles/variables'
import tinycolor               from 'tinycolor2'

import { HoverDisplay, Alert } from '../../../src'

const description = `
Hover to show content.

*Note: Nested react-router Links will not work unless you [pass in a function via the component props](${window.location.origin}/hover-display#react-router-example) that returns the components.*
`.trim()

const hoverDisplayDefaultStyle = {
  padding: variables.sizing.spacing3,
  border : `1px solid ${tinycolor(variables.colors.secondary).setAlpha(.2)}`,
}

export default doc({
  display : 'HoverDisplay',
  to      : '/hover-display',
  sections: [
    {
      header  : 'HoverDisplay',
      description,
      sections: [
        {
          demo: <HoverDisplay
            content={
              <div
                key={'1'}
                style={{
                  border    : `1px solid ${tinycolor(variables.colors.secondary).setAlpha(.2)}`,
                  height    : '200px',
                  width     : '200px',
                  background: 'white',
                }}>
              Content
              </div>
            }
            style={hoverDisplayDefaultStyle}
          >
          Hover over me to display content
          </HoverDisplay>,
        },
        {
          demo: <div style={{overflow: 'hidden'}}>
            <HoverDisplay
              content={
                <Alert show type='positive'
                  key={'1'}
                >
                Inside overflow hidden Content
                </Alert>
              }
              style={hoverDisplayDefaultStyle}
            >
            Show an Alert
            </HoverDisplay>
          </div>,
        },
        {
          demo: <HoverDisplay
            align='right'
            content={
              <Alert show type='positive'
                key={'1'}
              >
              I should be on the right.
              </Alert>
            }
            style={hoverDisplayDefaultStyle}
          >
          Align right.
          </HoverDisplay>,
        },
        {
          demo: <HoverDisplay
            id={'react-router-example'}
            content={
              <Link
                key={'1'}
                to='/'
              >
              React Router Link
              </Link>
            }
            style={hoverDisplayDefaultStyle}
          >
          React Router Link Example
          </HoverDisplay>,
        },
      ],
    },
  ],
})
