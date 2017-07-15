import * as textFormat from './text-format.js'
import expect from 'expect'

describe('text-format.js', () => {
  it('works', () => {
    const str = `
      <div>
        yo
      </div>
    `

    const expected = [
      `<div>`,
      `  yo`,
      `</div>`,
    ].join('\n')

    const strRet = textFormat.alignText(str)
    expect(strRet).toBe(expected)
  })
})
