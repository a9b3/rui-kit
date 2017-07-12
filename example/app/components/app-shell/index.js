import styles         from './index.scss'
import React          from 'react'
import CSSModules     from 'react-css-modules'
import PropTypes      from 'prop-types'
import { Link }       from 'react-router-dom'
import {
  Loading,
  LeftMiddleRight,
  Row,
  FillParent,
  Sidebar,
  Dropdown,
}                     from '../../../../src'
import { withRouter } from 'react-router-dom'

@withRouter
@CSSModules(styles)
export default class AppShell extends React.Component {
  render() {
    return <div styleName='index'>
      <LeftMiddleRight
        styleName='header'
        left={<Row
          align='left'
          items={[
            <FillParent>
              <h2>
                UI-KIT
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
        <div styleName='sidebar-wrapper'>
          <Sidebar styleName='sidebar'>
            <Dropdown
              header={
                <div className={styles.dropheader}>
                  Header
                </div>
              }
            >
              <Link
                to='/'
                className={styles.dropchild}
              >
                one
              </Link>
              <Link
                to='/comp'
                className={styles.dropchild}
              >
                two
              </Link>
            </Dropdown>
          </Sidebar>
        </div>

        <div styleName='content'>
          {this.props.children}
        </div>
      </div>
    </div>
  }
}
