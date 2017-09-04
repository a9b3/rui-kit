import styles           from './index.scss'
import React            from 'react'
import CSSModules       from 'react-css-modules'
import PropTypes        from 'prop-types'
import { observer }     from 'mobx-react'

import HeaderComponent  from './header.component.js'
import SidebarComponent from './sidebar.component.js'

@observer
@CSSModules(styles)
export default class AppShell extends React.Component {
  static propTypes = {
    headerNode    : PropTypes.node,
    // Top left display node.
    leftNode      : PropTypes.node,
    // Top right node.
    rightNodeLinks: PropTypes.arrayOf(PropTypes.shape({
      display: PropTypes.node.isRequired,
      to     : PropTypes.string,
      href   : PropTypes.string,
    })),
    // If present, the sidebar will display with the links.
    links: PropTypes.arrayOf(PropTypes.shape({
      header: PropTypes.string,
      items : PropTypes.arrayOf(PropTypes.shape({
        display: PropTypes.string.isRequired,
        to     : PropTypes.string,
      })),
    })),
    // Main content.
    children    : PropTypes.node,
    contentWidth: PropTypes.any,
  }

  static defaultProps = {
    links         : [],
    rightNodeLinks: [],
  }

  state = {
    showSidebar: true,
  }

  toggleSidebar = () => {
    const {
      showSidebar,
    } = this.state

    this.setState({
      showSidebar: !showSidebar,
    })
  }

  render() {
    const {
      links,
      leftNode,
      rightNodeLinks,
      headerNode,
      contentWidth,
      children,
      ...rest
    } = this.props
    const {
      showSidebar,
    } = this.state

    return <div
      styleName='index'
      {...rest}
    >
      <HeaderComponent
        leftNode={leftNode}
        headerNode={headerNode}
        rightNodeLinks={rightNodeLinks}
        toggleSidebar={this.toggleSidebar}
      />

      <div styleName='row'>
        {
          links.length !== 0 && <div styleName='sidebar-wrapper' style={{
            width: showSidebar ? '18rem' : '0',
          }}>
            <SidebarComponent
              links={links}
            />
          </div>
        }

        <div styleName='content'>
          <div style={{
            width   : '100%',
            maxWidth: contentWidth,
            margin  : '0 auto',
            height  : '100%',
          }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  }
}
