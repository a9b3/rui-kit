import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'
import Form       from '../../components/form'

@CSSModules(styles)
export default class ThemedForm extends React.Component {
  render() {
    return <Form
      styleName='form'
      {...this.props}
    />
  }
}
