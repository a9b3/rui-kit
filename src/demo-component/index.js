import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'

import Demo       from './demo.component.js'

@CSSModules(styles)
export default class DemoComponent extends React.Component {
  static propTypes = {
    // React component constructor.
    component  : PropTypes.func,
    header     : PropTypes.string.isRequired,
    description: PropTypes.string,
    demos      : PropTypes.arrayOf(PropTypes.shape({
      instance       : PropTypes.node,
      codeSnippet    : PropTypes.string,
      codeSnippetType: PropTypes.string,
    })).isRequired,
  }

  render() {
    const {
      component,
      header,
      description,
      demos,
    } = this.props

    return <article
      styleName='container'
    >
      <h2>{header}</h2>

      {
        description && <p>
          {description}
        </p>
      }

      {
        component && <section>
          <h3>PropTypes</h3>

          <ul>
            {Object.keys(component.propTypes).map(key => <li key={key}>{key}</li>)}
          </ul>
        </section>
      }

      {
        demos.length > 0 && <section>
          <h3>Example</h3>

          {
            demos.map((d, key) => <Demo
              key={key}
              demo={d}
            />)
          }
        </section>
      }
    </article>
  }
}
