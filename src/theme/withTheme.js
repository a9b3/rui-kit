import {observer} from 'mobx-react'

import theme      from './theme.js'

export default ComposedComponent => {

  @observer
  class Composed extends React.Component {

    displayName = `${ComposedComponent.name}--withTheme`

    render() {
      return <ComposedComponent
        {...this.props}
        theme={theme.variables}
      />
    }

  }

  return Composed

}
