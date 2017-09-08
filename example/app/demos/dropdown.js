import doc          from 'components/DocPage/doc'
import { Dropdown } from '../../../src'

export default doc({
  display  : 'Dropdown',
  to       : '/dropdown',
  component: Dropdown,
  sections : [
    {
      header     : 'Dropdown',
      description: 'Dropdown.',
      sections   : [
        {
          demo: <Dropdown
            header={'Click to Close'}
          >
            <div>
                Child1
            </div>
            <div>
                Child2
            </div>
            <div>
                Child3
            </div>
          </Dropdown>,
        },
      ],
    },
  ],
})
