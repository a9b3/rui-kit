import FormExample    from './form-example.js'
import FormExampleStr from '!!raw-loader!./form-example.js'
import formMd         from '!!raw-loader!./form.md'

const description = `
Unstyled form components.

- hi
- bye

1. hi
2. bye

<code>
hi
</code>
`.trim()

/* eslint-disable react/jsx-key */
export default {
  display          : 'Form',
  to               : '/form',
  demoComponentAttr: {
    header     : `Form`,
    description: formMd,
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
