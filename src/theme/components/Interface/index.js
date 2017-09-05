import styles    from './styles.scss'
import withTheme from '../../withTheme.js'

import { Alert } from '../../../index.js'

@withTheme
export default class Interface extends React.Component {
  render() {
    const {
      theme,
      ...rest
    } = this.props

    return <Alert
      show
      className={styles.container}
      {...rest}
    >
      {theme.keys().join(', ')}
    </Alert>
  }
}
