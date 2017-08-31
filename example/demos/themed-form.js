import FormExample from './themed-form-example.js'
import FormExampleStr from '!!raw-loader!./themed-form-example.js'

const description = `
A form with validation.
`.trim()

/* eslint-disable react/jsx-key */
export default {
  display          : 'ThemedForm',
  to               : '/themed-form',
  demoComponentAttr: {
    header: `ThemedForm`,
    description,
    demos : [
      {
        instance       : <FormExample />,
        codeSnippet    : FormExampleStr,
        codeSnippetType: 'jsx',
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
