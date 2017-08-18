import { TruncateText } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'TruncateText',
  to               : '/truncate-text',
  demoComponentAttr: {
    header     : `<TruncateText />`,
    component: TruncateText,
    description: 'TruncateText component.',
    demos      : [
      {
        instance: <TruncateText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
              velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
              volutpat sit amet.
      </TruncateText>,
      }
    ],
  },
}
/* eslint-enable react/jsx-key */
