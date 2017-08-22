import { ImageCarousel } from '../../src'

/* eslint-disable react/jsx-key */
const displayName = 'ImageCarousel'
export default {
  display          : displayName,
  to               : '/image-carousel',
  demoComponentAttr: {
    header     : displayName,
    description: 'An image carousel. Images is an array of image urls. Hover over left or right to display the button.',
    component  : ImageCarousel,
    demos      : [
      {
        displayName,
        instance: <div style={{
          height: '400px',
          width : '100%',
        }}>
          <ImageCarousel
            images={[
              require('./images/1.jpg'),
              require('./images/2.jpg'),
              require('./images/3.jpg'),
            ]}
          />
        </div>,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
