import cx            from 'classnames'
import {noop}        from 'lodash'
import {compose}     from 'lodash/fp'
import PropTypes     from 'prop-types'
import React         from 'react'

import types         from '../types.js'
import withFormState from '../utils/withFormState.js'

@withFormState
export default class FormField extends React.Component {
  static propTypes = {
    // from withFormState
    formState: PropTypes.object.isRequired,
    // from consumer
    path     : PropTypes.string.isRequired,
    type     : PropTypes.oneOf(Object.values(types)).isRequired,
    render   : PropTypes.func.isRequired,
    fieldArgs: PropTypes.object,
  }

  static defaultProps = {
    fieldArgs: {},
  }

  formStateField = undefined

  componentWillMount() {
    const {formState, path, type, fieldArgs} = this.props
    this.formStateField = formState.get(path) || formState.create(path, type, fieldArgs)
    console.log(formState.toJS())
  }

  onChange = (event) => {
    this.formStateField.setValue(
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    )
  }

  getInputProps = ({onChange = noop, ...props} = {}) => {
    return {
      ...props,
      onChange: compose(onChange, this.onChange),
      value   : this.formStateField.value,
    }
  }

  render() {
    const {render, type} = this.props
    return render({
      getInputProps : type === types.VALUE ? this.getInputProps : undefined,
      formStateField: this.formStateField,
    })
  }
}
