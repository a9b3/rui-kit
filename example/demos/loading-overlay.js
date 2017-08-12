import { LoadingOverlay } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'LoadingOverlay',
  to               : '/loading-overlay',
  demoComponentAttr: {
    component  : LoadingOverlay,
    header     : `<LoadingOverlay />`,
    description: `A loading overlay, this component has absolute position so be sure to put it in a parent element with relative position.`,
    demos      : [
      <div style={{
        border  : '1px solid black',
        height  : 200,
        position: 'relative',
      }}>
        <LoadingOverlay show />
      </div>,

      // To add background color to the overlay simply provide a style.
      <div style={{
        border  : '1px solid black',
        height  : 200,
        position: 'relative',
      }}>
        <LoadingOverlay
          show
          style={{background: 'blue'}}
        />
      </div>,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
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
}
/* eslint-enable react/jsx-key */
