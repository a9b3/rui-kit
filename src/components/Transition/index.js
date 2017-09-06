import styles               from './styles.scss'
import PropTypes            from 'prop-types'
import {CSSTransitionGroup} from 'react-transition-group'

@cssModule(styles)
export default class Transition extends React.Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  render() {
    const {
      children,
    } = this.props
    return <CSSTransitionGroup
      transitionName={'tran'}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {children}
    </CSSTransitionGroup>
  }
}
