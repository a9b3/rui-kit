import { UploadImage } from '../../src'
import {timeoutAsync}  from '../helpers.js'

export default {
  display          : 'UploadImage',
  to               : '/upload-image',
  demoComponentAttr: {
    header: `<UploadImage />`,
    demos : [
      <UploadImage
        style={{height: 200, width: 200, borderRadius: '50%'}}
        uploadFile={timeoutAsync}
      />,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
      <UploadImage
        style={{height: 200, width: 200}}
        uploadFile={timeoutAsync}
      />,
          `,
  },
}
