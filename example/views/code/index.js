import styles          from './index.scss'
import React           from 'react'
import CSSModules      from 'react-css-modules'
import {
  Code,
}                    from '../../../src'
import DemoComponent from 'components/demo-component'

@CSSModules(styles)
export default class CodeView extends React.Component {
  render() {
    return <article
      styleName='container'
    >
      <DemoComponent
        header={`<Code />`}
        demos={[
          <Code>
            {'hi'}
          </Code>,
        ]}
        codeSnippet={`
          <Code>
            {'hi'}
          </Code>
        `}
        codeSnippetType='html'
      />
    </article>
  }
}
