import { TruncateText } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'TruncateText',
  to               : '/truncate-text',
  demoComponentAttr: {
    header     : `<TruncateText />`,
    description: 'TruncateText component.',
    demos      : [
      <TruncateText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
              velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
              volutpat sit amet.
      </TruncateText>,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
            <TruncateText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
              velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
              volutpat sit amet.
            </TruncateText>
          `,
  },
}
/* eslint-enable react/jsx-key */
