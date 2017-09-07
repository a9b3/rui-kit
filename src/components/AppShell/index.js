import styles       from './styles.scss'
import React        from 'react'
import PropTypes    from 'prop-types'
import { observer } from 'mobx-react'
import cx           from 'classnames'

import Header       from './Header'
import Sidebar      from './Sidebar'

@observer
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
      {...rest}
      className={cx(styles.index, rest.className)}
    >
      <Header
        leftNode={leftNode}
        headerNode={headerNode}
        rightNodeLinks={rightNodeLinks}
        toggleSidebar={this.toggleSidebar}
      />

      <div className={styles.row}>
        {
          links.length !== 0 && <div
            className={cx(styles['sidebar-wrapper'])}
            style={{
              width: showSidebar ? '18rem' : '0',
            }}>
            <Sidebar
              links={links}
            />
          </div>
        }

        <div className={cx(styles.content)}>
          <main style={{
            width   : '100%',
            maxWidth: contentWidth,
            margin  : '0 auto',
            height  : '100%',
          }}>
            {children}
          </main>
        </div>
      </div>
    </div>
  }
}
