import styles    from './styles.scss'
import React     from 'react'
import PropTypes from 'prop-types'

import Demo      from './component.js'
import Markdown  from '~/components/Markdown'

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
      className={styles.container}
    >
      <h2 className={styles.header}>
        {header}
      </h2>

      {
        description && <section className={styles.description}>
          <Markdown
            source={description}
          />
        </section>
      }

      {
        component && component.propTypes && <section className={styles.props}>
          <h4>PropTypes</h4>

          <ul>
            {Object.keys(component.propTypes).map(key => <li key={key}>{key}</li>)}
          </ul>
        </section>
      }

      {
        demos.length > 0 && <section className={styles.demos}>
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
