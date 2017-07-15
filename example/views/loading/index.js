import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import {
  Loading,
  LoadingOverlay,
  Code,
} from '../../../src'
import * as textFormat from 'services/text-format'

@CSSModules(styles)
export default class LoadingView extends React.Component {
  render() {
    return <article
      styleName='container'
    >
      <article>
        <section>
          <h2>Component</h2>
          <div style={{ fontSize: '40px' }}>
            <Loading
              show
              color='#000000'
            />
          </div>
        </section>

        <section>
          <h2>Example</h2>
          <Code type='html'>
            {
              textFormat.alignText(`
                <Loading
                  show
                  color='#000000'
                />
              `)
            }
          </Code>
        </section>

        <p>
          hi
          okok
          Hello World!
        </p>
      </article>

      <article>
        <section>
          <h2>Component</h2>
          <div style={{
            border: '1px solid black',
            height: 300,
            fontSize: '40px',
            position: 'relative',
          }}>
            <LoadingOverlay show />
          </div>
        </section>

        <section>
          <h2>Example</h2>
          <Code type='html'>
            {
              textFormat.alignText(`
                <Loading
                  show
                  color='#ff0000'
                />
              `)
            }
          </Code>
        </section>

        <p>
          hi
          okok
          Hello World!
        </p>
      </article>
    </article>
  }
}
