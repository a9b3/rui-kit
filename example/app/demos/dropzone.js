import doc                from 'components/DocPage/doc'
import DropzoneExample    from './dropzone-example.js'
import DropzoneExampleStr from '!!raw-loader!./dropzone-example.js'
import {
  Dropzone,
}                         from '../../../src'

export default doc({
  component: Dropzone,
  display  : 'Dropzone',
  to       : '/dropzone',
  sections : [
    {
      header     : 'Dropzone',
      description: 'A dropzone component.',
      sections   : [
        {
          demo        : <DropzoneExample />,
          overrideDemo: {
            displayName    : 'Dropzone',
            codeSnippet    : DropzoneExampleStr,
            codeSnippetType: 'jsx',
          },
        },
      ],
    },
  ],
})
