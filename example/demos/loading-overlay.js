import { LoadingOverlay } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'LoadingOverlay',
  to               : '/loading-overlay',
  demoComponentAttr: {
    header     : `LoadingOverlay`,
    component  : LoadingOverlay,
    description: `A loading overlay, this component has absolute position so be sure to put it in a parent element with relative position.`,
    demos      : [
      {
        instance: <div style={{
          border  : '1px solid black',
          height  : 200,
          position: 'relative',
        }}>
          <LoadingOverlay show />
        </div>,
      },
      {
        // To add background color to the overlay simply provide a style.
        instance: <div style={{
          border  : '1px solid black',
          height  : 200,
          position: 'relative',
        }}>
          <LoadingOverlay
            show
            style={{background: 'blue'}}
          />
        </div>,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
