import styles               from './styles.scss'
import PropTypes            from 'prop-types'
import {CSSTransitionGroup} from 'react-transition-group'

const ALLOWED_TYPES = {
  fade: {
    enterTimeout: 500,
    leaveTimeout: 500,
  },
}

@cssModule(styles)
export default class Transition extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(Object.keys(ALLOWED_TYPES)),
  }

  static defaultProps = {
    type: 'fade',
  }

  render() {
    const {
      type,
      children,
    } = this.props

    const selectedType = ALLOWED_TYPES[type]

    return <CSSTransitionGroup
      transitionName={`rui-${type}`}
      transitionEnterTimeout={selectedType.enterTimeout}
      transitionLeaveTimeout={selectedType.leaveTimeout}
    >
      {children}
    </CSSTransitionGroup>
  }
}
