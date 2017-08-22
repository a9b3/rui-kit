import { HoverDisplay, Alert } from '../../src'
import variables        from 'esayemm-styles/variables'
import tinycolor        from 'tinycolor2'

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
          style={{
            padding: variables.sizing.spacing3,
            border : `1px solid ${tinycolor(variables.colors.secondary).setAlpha(.2)}`,
          }}
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
        >
          Hover over me to display content
        </HoverDisplay>,
      },
      {
        displayName,
        instance: <div style={{overflow: 'hidden'}}>
          <HoverDisplay
            style={{
              padding: variables.sizing.spacing3,
              border : `1px solid ${tinycolor(variables.colors.secondary).setAlpha(.2)}`,
            }}
            content={
              <Alert show type='positive'>
                Inside overflow hidden Content
              </Alert>
            }
          >
            Show an Alert
          </HoverDisplay>
        </div>,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
