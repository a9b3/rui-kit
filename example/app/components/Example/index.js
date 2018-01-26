import styles    from './index.css'
import PropTypes from 'prop-types'
import React     from 'react'

import { Code }  from '../../../../src'

export default class Example extends React.Component {
  static propTypes = {
    info: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
    sample: PropTypes.any,
  }

  static defaultProps = {}

  render() {
    const { info, sample } = this.props
    return (
      <div className={styles.example}>
        <section className={styles.info}>
          <h3>{info.title}</h3>
          <p>{info.description}</p>
        </section>
        <section className={styles.sample}>
          {sample}
          <Code>const hello</Code>
        </section>
      </div>
    )
  }
}
