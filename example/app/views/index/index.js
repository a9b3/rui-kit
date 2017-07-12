import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import {
  Loading,
  LeftMiddleRight,
  Row,
  FillParent,
}                 from '../../../../src'

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
                Cool
              </h2>
            </FillParent>,
          ]}
        />}
        middle={<Row
          items={[
            <FillParent>
              <h1>
                UI-KIT
              </h1>
            </FillParent>,
          ]}
        />}
        right={<Row
          align='right'
          items={[
            <FillParent>
              Cars
            </FillParent>,
            <FillParent>
              About
            </FillParent>,
            <FillParent>
              Instructions
            </FillParent>,
            <FillParent>
              Instructions
            </FillParent>,
          ]}
        />}
      />

      <Loading
        type={'pulse'}
        show
      />
    </div>
  }
}
