import { Image } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'Image',
  to               : '/image',
  demoComponentAttr: {
    header: `Image`,
    component: Image,
    demos : [
      {
        instance: <Image
          style={{width: 200, height: 200}}
          src={require('./images/1.jpg')}
        />,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
