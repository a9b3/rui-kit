import { Icon, svgs } from '../../../src'
import doc            from 'components/DocPage/doc'

const displayName = 'Icon'
export default doc({
  display : displayName,
  to      : '/icon',
  sections: [
    {
      header     : displayName,
      description: `Available types are ${Object.keys(svgs).join(', ')}. Default size is 1em height.`,
      sections   : [
        ...Object.keys(svgs).map((key) => ({
          demo: <Icon type={key} />,
          displayName,
        })),
      ],
    },
  ],
})
