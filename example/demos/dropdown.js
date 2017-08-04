import { Dropdown } from '../../src'

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
