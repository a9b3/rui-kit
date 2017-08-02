import styles       from './index.scss'
import React        from 'react'
import CSSModules   from 'react-css-modules'
import PropTypes    from 'prop-types'
import { observer } from 'mobx-react'

@observer
@CSSModules(styles)
export default class Form extends React.Component {
  static propTypes = {
    // Instance of FormState.
    formState: PropTypes.object.isRequired,
    onSubmit: PropTypes.func,
    // Subtree should contain some FormField components for this to be useful.
    children: PropTypes.node,
  }

  static defaultProps = {
    onSubmit: () => {},
  }

  onSubmit = async (evt) => {
    evt.preventDefault()

    const {
      onSubmit,
      formState,
    } = this.props

    if (!formState.validateAll()) {
      return
    }

    await onSubmit()
  }

  render() {
    const {
      formState, // eslint-disable-line
      onSubmit, // eslint-disable-line
      children,
      ...rest,
    } = this.props

    return <form
      styleName='container'
      {...rest}
      onSubmit={this.onSubmit}
    >
      {children}
    </form>
  }
}
