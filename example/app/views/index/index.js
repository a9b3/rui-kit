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
            {
              node: <FillParent>
                <h1>
                  Hi
                </h1>
              </FillParent>,
              width: 80,
            },
          ]}
        />}
        middle={<Row
          items={[
            {
              node: <FillParent>
                <h1>
                  Meme
                </h1>
              </FillParent>,
              width: 200,
            },
          ]}
        />}
        right={<Row
          align='right'
          items={[
            {
              node: <FillParent>Cars</FillParent>,
              width: 80,
            },
            {
              node: <FillParent>About</FillParent>,
              width: 80,
            },
            {
              node: <FillParent>Instructions</FillParent>,
              width: 100,
            },
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
