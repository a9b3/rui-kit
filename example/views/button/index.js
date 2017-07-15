import styles        from './index.scss'
import React         from 'react'
import CSSModules    from 'react-css-modules'
import {
  Button,
}                    from '../../../src'
import DemoComponent from 'components/demo-component'

@CSSModules(styles)
export default class ButtonView extends React.Component {
  render() {
    return <article
      styleName='container'
    >
      <DemoComponent
        header={`<Button />`}
        demos={[
          <Button>
            Hello I am a button.
          </Button>,
          <Button
            style={{
              display: 'block',
            }}
            type='outline'
            color='#ff0000'
          >
            Hello I am a button.
          </Button>,
        ]}
        codeSnippet={`
          <Button>
            Hello I am a button.
          </Button>

          <Button
            style={{
              display: 'block',
            }}
            type='outline'
            color='#ff0000'
          >
            Hello I am a button.
          </Button>
        `}
        codeSnippetType='html'
      />
    </article>
  }
}
