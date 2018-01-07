import {Alert} from '../../../../src'
import doc     from 'components/DocPage/doc'

export default doc({
  component: Alert,
  to       : '/alert',
  display  : 'Alert',
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
