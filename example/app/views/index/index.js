import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import {
  Loading,
  LeftMiddleRight,
  Row,
  FillParent,
  Sidebar,
  Dropdown,
}                 from '../../../../src'

function test() {
  const elems = []
  for (let i = 0; i < 100; i++) {
    elems.push(
      <div>
        hi
      </div>
    )
  }

  return elems
}

@CSSModules(styles)
export default class Index extends React.Component {
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
              <h1 className={styles.h1}>
                UI-KIT
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
              <div className={styles.dropchild}>
                one
              </div>
              <div className={styles.dropchild}>
                two
              </div>
            </Dropdown>
          </Sidebar>
        </div>

        <div styleName='content'>
        </div>
      </div>
    </div>
  }
}
