import styles    from './styles.scss'
import PropTypes from 'prop-types'
import cx        from 'classnames'

/*
 * Top Level Gate
 *
 * <RuiTheme>
 * </RuiTheme>
 */
function RuiTheme({
  theme,
  children,
  ...rest
}) {
  return <span
    className={cx('rui', theme)}
    {...rest}
  >
    {this.props.children}
  </span>
}

RuiTheme.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
}

RuiTheme.defaultProps = {
  theme: 'light',
}

export default RuiTheme
