import styles       from './index.scss'
import React        from 'react'
import CSSModules   from 'react-css-modules'
import PropTypes    from 'prop-types'
import { observer } from 'mobx-react'

@observer
@CSSModules(styles)
export default class FormFieldError extends React.Component {
  static propTypes = {
    // Instance of FormState.
    formState: PropTypes.object.isRequired,
    // The specific key for which this form field is for. This should be the
    // same key as one given to the validators.
    formFieldKey: PropTypes.string.isRequired,
  }

  render() {
    const {
      formState,
      formFieldKey,
      ...rest,
    } = this.props

    const error = formState.getError(formFieldKey)

    if (!error) return null

    return <span
      styleName='container'
      {...rest}
    >
      {error.message}
    </span>
  }
}
