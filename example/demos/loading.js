import { Loading } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'Loading',
  to               : '/loading',
  demoComponentAttr: {
    component  : Loading,
    header     : `Loading`,
    description: 'A simple loading icon.',
    demos      : [
      {
        instance: <Loading
          show
          color='#000000'
        />,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
