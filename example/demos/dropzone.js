import DropzoneExample    from './dropzone-example.js'
import DropzoneExampleStr from '!!raw-loader!./dropzone-example.js'
import {
  Dropzone,
}                         from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'Dropzone',
  to               : '/dropzone',
  demoComponentAttr: {
    header     : `<Dropzone />`,
    component  : Dropzone,
    description: 'Dropzone component.',
    demos      : [
      {
        instance       : <DropzoneExample />,
        codeSnippet    : DropzoneExampleStr,
        codeSnippetType: 'jsx',
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
