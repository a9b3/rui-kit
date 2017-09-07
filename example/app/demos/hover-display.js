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

/* eslint-disable react/jsx-key */
const displayName = 'HoverDisplay'
export default {
  display          : displayName,
  to               : '/hover-display',
  demoComponentAttr: {
    header   : displayName,
    component: HoverDisplay,
    description,
    demos    : [
      {
        displayName,
        instance: <HoverDisplay
          content={
            <div style={{
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
        displayName,
        instance: <div style={{overflow: 'hidden'}}>
          <HoverDisplay
            content={
              <Alert show type='positive'>
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
        displayName,
        instance: <HoverDisplay
          align='right'
          content={
            <Alert show type='positive'>
              I should be on the right.
            </Alert>
          }
          style={hoverDisplayDefaultStyle}
        >
          Align right.
        </HoverDisplay>,
      },
      {
        displayName,
        instance: <HoverDisplay
          content={
            <div
              onClick={() => alert('Clicked')}
            >
              Click
            </div>
          }
          style={hoverDisplayDefaultStyle}
        >
          Click inside
        </HoverDisplay>,
      },
      {
        displayName,
        instance: <HoverDisplay
          id={'react-router-example'}
          content={
            <Link
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
}
/* eslint-enable react/jsx-key */
