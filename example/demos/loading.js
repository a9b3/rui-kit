import { Loading } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'Loading',
  to               : '/loading',
  demoComponentAttr: {
    component: Loading,
    header   : `<Loading />`,
    demos    : [
      <Loading
        show
        color='#000000'
      />,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
              <Loading
                show
                color='#000000'
              />
          `,
  },
}
/* eslint-enable react/jsx-key */
