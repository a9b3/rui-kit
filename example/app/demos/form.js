import doc            from 'components/DocPage/doc'
import FormExample    from './form-example.js'
import FormExampleStr from '!!raw-loader!./form-example.js'
import formMd         from '!!raw-loader!./form.md'
import formSourceMd   from '!!raw-loader!./formSource.md'

export default doc({
  display : 'Form',
  to      : '/form',
  sections: [
    {
      header     : 'Form',
      description: formMd,
      source     : formSourceMd,
      sections   : [
        {
          header      : <h4>Example</h4>,
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
