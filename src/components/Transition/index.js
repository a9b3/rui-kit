import styles               from './styles.scss'
import PropTypes            from 'prop-types'
import {CSSTransitionGroup} from 'react-transition-group'

import transitions          from './transitions'

export default class Transition extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(Object.keys(transitions)),
  }

  static defaultProps = {
    type: 'fade',
  }

  render() {
    const {
      type,
    } = this.props

    const selectedType = transitions[type]

    return <CSSTransitionGroup
      transitionName={`rui-${type}`}
      transitionEnterTimeout={selectedType.enterTimeout}
      transitionLeaveTimeout={selectedType.leaveTimeout}
    >
      {this.props.children}
    </CSSTransitionGroup>
  }
}
