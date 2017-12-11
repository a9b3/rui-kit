import {noop}        from 'lodash'
import {compose}     from 'lodash/fp'
import PropTypes     from 'prop-types'
import React         from 'react'

import withFormState from '~/components/form/utils/withFormState'

@withFormState
export default class FormField extends React.Component {
  static propTypes = {
    name     : PropTypes.string.isRequired,
    render   : PropTypes.func.isRequired,
    // from withFormState
    formState: PropTypes.object.isRequired,
  }

  componentWillMount() {
    const {name, formState} = this.props
  }

  handleChange = (event) => {
    const {name, formState} = this.props
    const formStateField = formState.getFormStateField(name)
    formStateField.setValue(
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    )
  }

  getFormFieldProps = ({onChange = noop, ...props} = {}) => {
    const {formState, name} = this.props
    const formStateField = formState.getFormStateField(name)
    return {
      formFieldProps: {
        onChange: compose(onChange, this.handleChange),
        name,
        error   : formStateField.error,
        modified: formStateField.modified,
        value   : formStateField.value,
      },
      ...props,
    }
  }

  render() {
    const {render} = this.props
    return render({getFormFieldProps: this.getFormFieldProps})
  }
}
