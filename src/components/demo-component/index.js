import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'

import Demo       from './demo.component.js'
import {
  TruncateText,
  Markdown,
}                 from '../../index.js'

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
      <h2 styleName='header'>
        <TruncateText>
          {header}
        </TruncateText>
      </h2>

      {
        description && <section styleName='description'>
          <Markdown
            source={description}
          />
        </section>
      }

      {
        component && component.propTypes && <section styleName='props'>
          <h4>PropTypes</h4>

          <ul>
            {Object.keys(component.propTypes).map(key => <li key={key}>{key}</li>)}
          </ul>
        </section>
      }

      {
        demos.length > 0 && <section styleName='demos'>
          <h3>Demos</h3>
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
