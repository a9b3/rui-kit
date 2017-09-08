import doc from 'components/DocPage/doc'
import { Loading } from '../../../src'
import variables   from 'esayemm-styles/variables'

export default doc({
  display : 'Loading',
  to      : '/loading',
  sections: [
    {
      header     : 'Loading',
      description: 'Loading icon',
      sections   : [
        {
          demo: <Loading
            show
            color='#000000'
          />,
        },
        {
          demo: <Loading
            show
            color={variables.green}
          />,
        },
        {
          description: 'You can control the size of the icon using font size, the icon uses em values for its size.',
          demo       : <div style={{fontSize: '2em'}}>
            <Loading
              show
              color='#000000'
            />
          </div>,
        },
      ],
    },
  ],
})
