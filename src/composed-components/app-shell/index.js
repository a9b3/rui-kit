import styles         from './index.scss'
import React          from 'react'
import CSSModules     from 'react-css-modules'
import PropTypes      from 'prop-types'
import { Link }       from 'react-router-dom'
import {
  LeftMiddleRight,
  Row,
  FillParent,
  Sidebar,
  Dropdown,
}                     from '../../index.js'
import { withRouter } from 'react-router-dom'

const links = [
  {
    header: 'Components',
    items: [
      {
        display: 'one',
        to: '/',
      },
      {
        display: 'two',
        to: '/comp',
      },
    ],
  },
]

@withRouter
@CSSModules(styles)
export default class AppShell extends React.Component {
  static propTypes = {
    header: PropTypes.node,
    links: PropTypes.arrayOf(PropTypes.shape({
      header: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.shape({
        display: PropTypes.string,
        to: PropTypes.string,
      })),
    })),
  }

  static defaultProps = {
    links: [],
  }

  render() {
    const {
      links,
      header,
    } = this.props

    return <div styleName='index'>
      <LeftMiddleRight
        styleName='header'
        left={<Row
          align='left'
          items={[
            <FillParent>
              <h2>
                {header}
              </h2>
            </FillParent>,
          ]}
        />}
        middle={<Row
          items={[
            <FillParent>
              <h1 key={this.props.location.key} className={styles.h1}>
                {this.props.location.pathname.replace('/', '')}
              </h1>
            </FillParent>,
          ]}
        />}
        right={<Row
          align='right'
          items={[
            <FillParent>
              <b>ABOUT</b>
            </FillParent>,
          ]}
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
        <div styleName='content'>
          {this.props.children}
        </div>
      </div>
    </div>
  }
}