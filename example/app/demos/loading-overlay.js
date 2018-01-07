import { LoadingOverlay } from '../../../src'
import doc                from 'components/DocPage/doc'
import variables          from 'esayemm-styles/variables'

export default doc({
  display : 'LoadingOverlay',
  to      : '/loading-overlay',
  sections: [
    {
      header     : 'LoadingOverlay',
      description: `A loading overlay, this component has absolute position so be sure to put it in a parent element with relative position.`,
      sections   : [
        {
          demo: <div style={{
            border  : '1px solid black',
            height  : 200,
            position: 'relative',
          }}>
            <LoadingOverlay show />
          </div>,
        },
        {
          demo: <div style={{
            border  : '1px solid black',
            height  : 200,
            position: 'relative',
          }}>
            <LoadingOverlay
              show
              style={{background: variables.colors.pink}}
            />
          </div>,
        },
      ],
    },
  ],
})
