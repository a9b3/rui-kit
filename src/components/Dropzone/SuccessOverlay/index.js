import styles from './styles.scss'
import cx     from 'classnames'

function SuccessOverlayComponent({
  ...rest
}) {
  return <div
    {...rest}
    className={cx(styles.success, rest.className)}
  >
    Success
  </div>
}

export default SuccessOverlayComponent
