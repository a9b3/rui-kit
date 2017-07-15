import styles        from './index.scss'
import React         from 'react'
import CSSModules    from 'react-css-modules'
import {
  Loading,
  LoadingOverlay,
}                    from '../../../src'
import DemoComponent from 'components/demo-component'

@CSSModules(styles)
export default class LoadingView extends React.Component {
  render() {
    return <article
      styleName='container'
    >
      <DemoComponent
        header={`<Loading />`}
        demos={[
          <div style={{ fontSize: '40px' }}>
            <Loading
              show
              color='#000000'
            />
          </div>,
        ]}
        codeSnippet={`
          <div style={{ fontSize: '40px' }}>
            <Loading
              show
              color='#000000'
            />
          </div>,
        `}
        codeSnippetType='html'
      />

      <DemoComponent
        header={`<LoadingOverlay />`}
        demos={[
          <div style={{
            border: '1px solid black',
            height: 300,
            fontSize: '40px',
            position: 'relative',
          }}>
            <LoadingOverlay show />
          </div>
        ]}
        codeSnippet={`
          <div style={{
            border: '1px solid black',
            height: 300,
            fontSize: '40px',
            position: 'relative',
          }}>
            <LoadingOverlay show />
          </div>
        `}
        codeSnippetType='html'
        description='A loading overlay, this component has absolute position so be sure to put it in a parent element with relative position.'
      />

    </article>
  }
}
