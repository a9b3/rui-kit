import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import {
  Code,
  Button,
}                 from '../../../../src'

@CSSModules(styles)
export default class Comp extends React.Component {
  render() {
    return <div
      styleName='container'
    >
      <h2>
        Code
      </h2>

      <p>
        Displays a block of text with syntax highlighting provided by highlight.js.
      </p>

      <Code>
        {
          [
            `<Code>`,
            `  {'Simple'}`,
            `</Code>`,
          ].join('\n')
        }
      </Code>

      <h2>
        Button
      </h2>

      <p>
        Generic button.
      </p>

      <p>
        <Button
          color={'#ff0000'}
        >
          Hello my name is
        </Button>
      </p>

      <p>
        <Button
          type='outline'
          color={'#ff0000'}
        >
          Hello my name is
        </Button>
      </p>

      <p>
        <Button
          href='#'
          color={'#ff0000'}
        >
          Hello my name is
        </Button>
      </p>

    </div>
  }
}
