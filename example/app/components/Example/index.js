import styles from './index.css'
import PropTypes from 'prop-types'
import React from 'react'

import { Code } from '../../../../src'

export default class Example extends React.Component {
  static propTypes = {
    info: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
    samples: PropTypes.arrayOf(
      PropTypes.shape({
        demo: PropTypes.node,
        code: PropTypes.string,
      }),
    ),
  }

  static defaultProps = {}

  render() {
    const { info, samples } = this.props
    return (
      <div className={styles.example}>
        <section className={styles.info}>
          <h3>{info.title}</h3>
          <p>{info.description}</p>
        </section>
        <section className={styles.samples}>
          {samples.map((sample, i) => (
            <div key={i} className={styles.sample}>
              <div className={styles.demo}>{sample.demo}</div>
              <Code
                type={sample.type}
                codeAttr={{ style: { background: 'transparent' } }}
              >
                {sample.code}
              </Code>
            </div>
          ))}
        </section>
      </div>
    )
  }
}
