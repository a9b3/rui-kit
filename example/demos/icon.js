import { Icon, svgs } from '../../src'

/* eslint-disable react/jsx-key */
const displayName = 'Icon'
export default {
  display          : displayName,
  to               : '/icon',
  demoComponentAttr: {
    header     : displayName,
    component  : Icon,
    description: `Available types are ${Object.keys(svgs).join(', ')}. Default size is 1em height.`,
    demos      : [
      ...Object.keys(svgs).map((key) => ({
        instance: <Icon type={key} />,
        displayName,
      })),
    ],
  },
}
/* eslint-enable react/jsx-key */
