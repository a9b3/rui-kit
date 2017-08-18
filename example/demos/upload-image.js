import { UploadImage } from '../../src'
import {timeoutAsync}  from '../helpers.js'

/* eslint-disable react/jsx-key */
export default {
  display          : 'UploadImage',
  to               : '/upload-image',
  demoComponentAttr: {
    header   : `<UploadImage />`,
    component: UploadImage,
    demos    : [
      {
        instance: <UploadImage
          style={{height: 200, width: 200, borderRadius: '50%'}}
          uploadFile={timeoutAsync}
        />,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
