import styles      from './index.scss'
import React       from 'react'
import CSSModules  from 'react-css-modules'
import PropTypes   from 'prop-types'
import {
  Link,
  withRouter,
}                  from 'react-router-dom'
import {
  LeftMiddleRight,
  Row,
  FillParent,
  Sidebar,
  Dropdown,
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
            <FillParent
              key={0}
            >
              <h2>
                {header}
              </h2>
            </FillParent>,
          ]}
        />}
        middle={<Row
          items={[
            <FillParent
              key={0}
            >
              <h1 key={this.props.location.key} className={styles.h1}>
                {this.props.location.pathname.replace('/', '')}
              </h1>
            </FillParent>,
          ]}
        />}
        right={<Row
          align='right'
          items={rightNodeLinks.map(({ display, to, href }, i) => {
            return <FillParent
              className={styles.dropchild}
              key={i}
            >
              {
                to
                  ? <Link
                    className={styles.link}
                    to={to}
                  >
                    {display}
                  </Link>
                  : <a href={href}
                    className={styles.link}
                  >
                    {display}
                  </a>
              }
            </FillParent>
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
                        return <Link
                          key={j}
                          to={item.to}
                          className={styles.dropchild}
                        >
                          {item.display}
                        </Link>
                      })
                    }
                  </Dropdown>
                })
              }
            </Sidebar>
          </div>
        }
        <div styleName='content'
          style={{
            width: '100%',
            maxWidth: contentWidth,
          }}
        >
          {this.props.children}
        </div>
      </div>
    </div>
  }
}
