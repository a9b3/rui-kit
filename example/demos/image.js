import { Image } from '../../src'

/* eslint-disable react/jsx-key */
const displayName = 'Image'
export default {
  display          : displayName,
  to               : '/image',
  demoComponentAttr: {
    header   : displayName,
    description: 'Display an image.',
    component: Image,
    demos    : [
      {
        displayName,
        instance: <Image
          style={{width: 200, height: 200}}
          src={require('./images/1.jpg')}
        />,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
