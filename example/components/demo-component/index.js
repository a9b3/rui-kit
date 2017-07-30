import styles          from './index.scss'
import React           from 'react'
import CSSModules      from 'react-css-modules'
import PropTypes       from 'prop-types'
import {
  Code,
}                      from '../../../src'
import { alignText }   from 'js-functions'
import {Helmet}        from 'react-helmet'

@CSSModules(styles)
export default class DemoComponent extends React.Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    demos: PropTypes.arrayOf(PropTypes.node).isRequired,
    codeSnippet: PropTypes.string.isRequired,
    codeSnippetType: PropTypes.string,
    description: PropTypes.string,
  }

  render() {
    const {
      header,
      demos,
      codeSnippet,
      codeSnippetType,
      description,
    } = this.props

    return <article
      styleName='container'
    >
      <Helmet>
        <title>{`React UI Kit | ${header}`}</title>
      </Helmet>
      <h2>{header}</h2>
      {description && <p>{description}</p>}

      <section>
        <h3>Example</h3>

        {
          demos.map((d, key) => {
            return <div key={key}>
              {d}
            </div>
          })
        }
      </section>

      <section>
        <h3>Code Snippet</h3>
        <Code type={codeSnippetType}>
          {alignText(codeSnippet)}
        </Code>
      </section>
    </article>
  }
}
