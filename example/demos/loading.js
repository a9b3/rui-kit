import { Loading } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'Loading',
  to               : '/loading',
  demoComponentAttr: {
    header: `<Loading />`,
    demos : [
      <div style={{ fontSize: '40px' }}>
        <Loading
          show
          color='#000000'
        />
      </div>,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
            <div style={{ fontSize: '40px' }}>
              <Loading
                show
                color='#000000'
              />
            </div>
          `,
  },
}
/* eslint-enable react/jsx-key */
