import { Loading } from '../../src'
import variables   from 'esayemm-styles/variables'

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
      {
        instance: <Loading
          show
          color={variables.green}
        />,
      },
      {
        instance: <div style={{fontSize: '2em'}}>
          <Loading
            show
            color='#000000'
          />
        </div>,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
