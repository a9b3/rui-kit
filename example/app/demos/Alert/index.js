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
          header: <h4>Default</h4>,
          demo  : <Alert show>
            Toast
          </Alert>,
        },
        {
          header: <h4>Type</h4>,
          demo  : <Alert show type='positive'>
            Toast
          </Alert>,
        },
      ],
    },
  ],
})
