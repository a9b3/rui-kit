import styles     from './styles.scss'
import cx         from 'classnames'
import {Collapse} from '../../../../src'

function CollapseDemo({
  ...rest
}) {
  return <div
    {...rest}
    className={cx(styles.container, rest.className)}
  >
    <Collapse
      content={
        <div className={cx(styles.content)}>
          one content
        </div>
      }
    >
      <div className={cx(styles.header)}>
        one
      </div>
    </Collapse>

    <Collapse
      content={
        <div className={cx(styles.content)}>
          two content
        </div>
      }
    >
      <div className={cx(styles.header)}>
        two
      </div>
    </Collapse>

    <Collapse
      content={
        <div className={cx(styles.content)}>
          three content
        </div>
      }
    >
      <div className={cx(styles.header)}>
        three
      </div>
    </Collapse>

    <Collapse
      content={
        <div className={cx(styles.content)}>
          four content
        </div>
      }
    >
      <div className={cx(styles.header)}>
        four
      </div>
    </Collapse>
  </div>
}

export default CollapseDemo
