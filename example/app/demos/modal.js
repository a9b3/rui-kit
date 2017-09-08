import doc       from 'components/DocPage/doc'
import { Modal } from '../../../src'
import variables from 'esayemm-styles/variables'

export default doc({
  display : 'Modal',
  to      : '/modal',
  sections: [
    {
      header     : 'Modal',
      description: 'A modal component.',
      sections   : [
        {
          demo: <Modal
            modalContent={
              <div
                onClick={(evt) => { evt.stopPropagation() }}
                style={{
                  background: 'white',
                  padding   : '3rem',
                }}>
            hi
              </div>
            }
          >
        Click to open Modal
          </Modal>,
        },
        {
          demo: <Modal
            backgroundColor={variables.green}
            modalContent={
              <div>Cool</div>
            }
          >
          Click to open Modal
          </Modal>,
        },
      ],
    },
  ],
})
