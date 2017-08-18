import FormExample    from './form-example.js'
import FormExampleStr from '!!raw-loader!./form-example.js'

/* eslint-disable react/jsx-key */
export default {
  display          : 'Form',
  to               : '/form',
  demoComponentAttr: {
    header     : `<Form />`,
    description: 'A form with validation.',
    demos      : [
      {
        instance       : <FormExample />,
        codeSnippet    : FormExampleStr,
        codeSnippetType: 'jsx',
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
