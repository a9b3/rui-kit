import styles from './success-overlay.component.scss'

function SuccessOverlayComponent({
  ...rest
}) {
  return <div
    styleName='success'
    {...rest}
  >
    Success
  </div>
}

export default cssModule(SuccessOverlayComponent, styles, {allowMultiple: true})
