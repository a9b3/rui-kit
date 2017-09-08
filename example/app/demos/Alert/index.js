import doc     from 'components/DocPage/doc'
import {Alert} from '../../../../src'

export default doc({
  component: Alert,
  to       : '/alert-foo',
  display  : 'AlertFoo',
  sections : [
    {
      header     : 'Alert',
      description: require('!!raw-loader!./general/description.md'),
      source     : require('!!raw-loader!./general/source.md'),
      sections   : [
        {
          header     : 'Default',
          description: require('!!raw-loader!./example/description.md'),
          source     : require('!!raw-loader!./example/source.md'),
          demo       : <Alert show>
            Toast
          </Alert>,
        },
        {
          header     : 'Override Props',
          description: require('!!raw-loader!./example/description.md'),
          demo       : <Alert show type='positive'>
            Toast
          </Alert>,
        },
      ],
    },
  ],
})
