import React        from 'react'
import { Modal } from '../../src'

export default {
  display          : 'Modal',
  to               : '/modal',
  demoComponentAttr: {
    header     : `<Modal />`,
    description: 'A modal component.',
    demos      : [
      <Modal
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
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
      <Modal
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
          `,
  },
}
