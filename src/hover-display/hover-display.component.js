import styles    from './hover-display.component.scss'
import PropTypes from 'prop-types'

function HoverDisplayComponent({
  content,
  children,
  ...rest
}) {
  return <div
    styleName='hover'
    {...rest}
  >
    {children}

    <div styleName='content'>
      {content}
    </div>
  </div>
}

HoverDisplayComponent.propTypes = {
  content : PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default cssModule(HoverDisplayComponent, styles, {allowMultiple: true})
