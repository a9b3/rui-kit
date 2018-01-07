import { UploadImage } from '../../../src'
import doc             from 'components/DocPage/doc'
import {timeoutAsync}  from 'helpers'

export default doc({
  display  : 'UploadImage',
  to       : '/upload-image',
  component: UploadImage,
  sections : [
    {
      header     : 'UploadImage',
      description: 'Upload image.',
      sections   : [
        {
          demo: <UploadImage
            style={{height: 200, width: 200, borderRadius: '50%'}}
            uploadFile={timeoutAsync}
          />,
        },
      ],
    },
  ],
})
