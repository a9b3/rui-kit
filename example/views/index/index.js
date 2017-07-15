import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import {
  Code,
}                 from '../../../src'

@CSSModules(styles)
export default class Index extends React.Component {
  render() {
    return <article>
      <h2>Install</h2>

      <Code>
        {`yarn add rui-kit --save`}
      </Code>

      <p>
        A set of react components. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
        velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
        volutpat sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
        velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
        volutpat sit amet.
      </p>
    </article>
  }
}
