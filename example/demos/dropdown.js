import { Dropdown } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'Dropdown',
  to               : '/dropdown',
  demoComponentAttr: {
    header     : `Dropdown`,
    component  : Dropdown,
    description: 'Dropdown component.',
    demos      : [
      {
        instance: <Dropdown
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
}
/* eslint-enable react/jsx-key */
