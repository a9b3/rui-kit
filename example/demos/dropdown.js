import { Dropdown } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'Dropdown',
  to               : '/dropdown',
  demoComponentAttr: {
    header     : `<Dropdown />`,
    description: 'Dropdown component.',
    demos      : [
      <Dropdown
        header={'Click to Close'}
      >
        <div>
                Child
        </div>
        <div>
                Child2
        </div>
        <div>
                Child3
        </div>
      </Dropdown>,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
            <Dropdown
              header={'Click to Close'}
            >
              <div>
                Child
              </div>
              <div>
                Child2
              </div>
              <div>
                Child3
              </div>
            </Dropdown>
          `,
  },
}
/* eslint-enable react/jsx-key */
