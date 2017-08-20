import { SelectFile } from '../../src'
import SelectFileExample from './select-file-example.js'
import SelectFileExampleStr from '!!raw-loader!./select-file-example.js'

/* eslint-disable react/jsx-key */
export default {
  display          : 'SelectFile',
  to               : '/select-file',
  demoComponentAttr: {
    header   : `SelectFile`,
    component: SelectFile,
    demos    : [
      {
        instance       : <SelectFileExample />,
        codeSnippet    : SelectFileExampleStr,
        codeSnippetType: 'jsx',
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
