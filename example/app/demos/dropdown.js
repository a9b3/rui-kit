import { Dropdown } from '../../../src'
import doc          from 'components/DocPage/doc'

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
