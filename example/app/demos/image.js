import doc       from 'components/DocPage/doc'
import { Image } from '../../../src'

const displayName = 'Image'
export default doc({
  display : displayName,
  to      : '/image',
  sections: [
    {
      header     : displayName,
      description: 'Display an image.',
      sections   : [
        {
          demo: <Image
            style={{width: 200, height: 200}}
            src={require('./images/1.jpg')}
          />,
        },
      ],
    },
  ],
})
