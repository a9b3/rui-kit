import FormExampleStr from '!!raw-loader!./themed-form-example.js'
import FormExample    from './themed-form-example.js'
import doc            from 'components/DocPage/doc'

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
