import SelectFileExampleStr from '!!raw-loader!./select-file-example.js'
import { SelectFile }       from '../../../src'
import SelectFileExample    from './select-file-example.js'
import doc                  from 'components/DocPage/doc'

export default doc({
  display : 'SelectFile',
  to      : '/select-file',
  sections: [
    {
      header  : 'SelectFile',
      sections: [
        {
          demo        : <SelectFileExample />,
          overrideDemo: {
            codeSnippet    : SelectFileExampleStr,
            codeSnippetType: 'jsx',
          },
        },
      ],
    },
  ],
})
