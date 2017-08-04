import React             from 'react'
import { ImageCarousel } from '../../src'

export default {
  display          : 'ImageCarousel',
  to               : '/image-carousel',
  demoComponentAttr: {
    header     : `<ImageCarousel />`,
    description: 'An image carousel. Images is an array of image urls.',
    demos      : [
      <div style={{ height: '400px', width: '100%' }}>
        <ImageCarousel
          images={[
            require('./images/1.jpg'),
            require('./images/2.jpg'),
            require('./images/3.jpg'),
          ]}
        />
      </div>,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
      <div style={{ height: '400px', width: '100%' }}>
        <ImageCarousel
          images={[
            require('./images/1.jpg'),
            require('./images/2.jpg'),
            require('./images/3.jpg'),
          ]}
        />
      </div>,
          `,
  },
}
