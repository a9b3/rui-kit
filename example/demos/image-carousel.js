import { ImageCarousel } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'ImageCarousel',
  to               : '/image-carousel',
  demoComponentAttr: {
    header     : `<ImageCarousel />`,
    description: 'An image carousel. Images is an array of image urls.',
    component  : ImageCarousel,
    demos      : [
      {
        instance: <div style={{ height: '400px', width: '100%' }}>
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
