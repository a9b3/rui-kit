import { HoverDisplay, Alert } from '../../src'
import variables        from 'esayemm-styles/variables'
import tinycolor        from 'tinycolor2'

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
    header     : displayName,
    component  : HoverDisplay,
    description: 'Hover to show content.',
    demos      : [
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
    ],
  },
}
/* eslint-enable react/jsx-key */
