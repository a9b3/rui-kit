import { Modal } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'Modal',
  to               : '/modal',
  demoComponentAttr: {
    header     : `<Modal />`,
    description: 'A modal component.',
    component  : Modal,
    demos      : [
      {
        instance: <Modal
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
    ],
  },
}
/* eslint-enable react/jsx-key */
