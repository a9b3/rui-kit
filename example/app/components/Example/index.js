import styles    from './index.css'
import PropTypes from 'prop-types'
import React     from 'react'

import { Code }  from '../../../../src'

export default class Example extends React.Component {
  static propTypes = {
    info: PropTypes.any,
    sample: PropTypes.any,
  }

  static defaultProps = {}

  render() {
    const { info, sample } = this.props
    return (
      <div className={styles.example}>
        <section className={styles.info}>
          <h3>Button</h3>
          <p>
            This is a simple button. You can add stuff to it. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Vestibulum eleifend velit id
            turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
            volutpat sit amet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum eleifend velit id turpis fringilla
            volutpat. Nulla tristique sem ex, ac dignissim odio volutpat sit
            amet.
          </p>
        </section>
        <section className={styles.sample}>
          {sample}
          <div
            style={{
              width: 100,
              height: 100,
              background: 'white',
              marginBottom: '20px',
            }}
          />
          <Code>const hello</Code>
        </section>
      </div>
    )
  }
}
