import { ImageCarousel } from '../../../src'
import doc               from 'components/DocPage/doc'

const displayName = 'ImageCarousel'
export default doc({
  display : displayName,
  to      : '/image-carousel',
  sections: [
    {
      header     : displayName,
      description: 'An image carousel. Images is an array of image urls. Hover over left or right to display the button.',
      sections   : [
        {
          demo: <div style={{
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
        {
          demo: <div style={{
            height: '400px',
            width : '100%',
          }}>
            <ImageCarousel
              images={[
                require('./images/1.jpg'),
                require('./images/2.jpg'),
                require('./images/3.jpg'),
              ]}
              style={{
                backgroundColor: 'black',
                backgroundSize : 'contain',
              }}
            />
          </div>,
        },
      ],
    },
  ],
})
