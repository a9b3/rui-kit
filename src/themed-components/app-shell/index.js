import styles      from './index.scss'
import React       from 'react'
import CSSModules  from 'react-css-modules'
import PropTypes   from 'prop-types'
import {
  NavLink,
  withRouter,
}                  from 'react-router-dom'
import {
  LeftMiddleRight,
  Row,
  Sidebar,
  Dropdown,
  TruncateText,
}                  from '../../index.js'

@withRouter
@CSSModules(styles)
export default class AppShell extends React.Component {
  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.node,
    header: PropTypes.node,
    links: PropTypes.arrayOf(PropTypes.shape({
      header: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.shape({
        display: PropTypes.string,
        to: PropTypes.string,
      })),
    })),
    rightNodeLinks: PropTypes.arrayOf(PropTypes.shape({
      display: PropTypes.string,
      to: PropTypes.string,
    })),
    contentWidth: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
  }

  static defaultProps = {
    links: [],
    rightNodeLinks: [],
  }

  render() {
    const {
      links,
      header,
      rightNodeLinks,
      contentWidth,
      style,
      className,
    } = this.props

    return <div styleName='index'
      style={style}
      className={className}
    >
      <LeftMiddleRight
        styleName='header'
        left={<Row
          align='left'
          items={[
            <h3 key={0}>
              {header}
            </h3>
          ]}
        />}
        middle={<Row
          items={[
            <TruncateText
              key={this.props.location.key}
              className={styles['middle-title']}
            >
              {this.props.location.pathname.replace('/', '')}
            </TruncateText>
          ]}
        />}
        right={<Row
          align='right'
          items={rightNodeLinks.map(({ display, to, href }, i) => {
            const attr = {
              key: i,
              className: `${styles.item} ${styles.link}`,
            }

            return to
            ? <NavLink {...attr} to={to}>
              {display}
            </NavLink>
            : <a
              {...attr}
              href={href}
              target='_blank'
            >
              {display}
            </a>
          })}
        />}
      />

      <div styleName='row'>
        {
          links.length !== 0 && <div styleName='sidebar-wrapper'>
            <Sidebar styleName='sidebar'>
              {
                links.map((link, i) => {
                  return <Dropdown
                    key={i}
                    header={
                      <div className={styles.dropheader}>
                        {link.header}
                      </div>
                    }
                  >
                    {
                      link.items.map((item, j) => {
                        return <NavLink
                          key={j}
                          to={item.to}
                          className={styles.dropchild}
                          activeClassName={styles.active}
                        >
                          {item.display}
                        </NavLink>
                      })
                    }
                  </Dropdown>
                })
              }
            </Sidebar>
          </div>
        }

        <div styleName='content'>
          <div style={{
            width: '100%',
            maxWidth: contentWidth,
            margin: '0 auto',
          }}>
            {this.props.children}
          </div>
        </div>
      </div>
    </div>
  }
}
