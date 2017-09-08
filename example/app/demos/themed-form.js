import doc            from 'components/DocPage/doc'
import FormExample    from './themed-form-example.js'
import FormExampleStr from '!!raw-loader!./themed-form-example.js'

const description = `
A form with validation.
`.trim()

export default doc({
  display  : 'ThemedForm',
  to       : '/themed-form',
  component: FormExample,
  sections : [
    {
      header  : 'ThemedForm',
      description,
      sections: [
        {
          demo        : <FormExample />,
          overrideDemo: {
            codeSnippet    : FormExampleStr,
            codeSnippetType: 'jsx',
          },
        },
      ],
    },
  ],
})
