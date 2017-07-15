/**
 * Takes a string that looks like this
 * `
 *   <div>
 *     yo
 *   </div>
 * `
 *
 * and returns
 *
 * `<div>
 *   yo
 * </div>`
 *
 * You can use this to display example code without aligning your text against
 * the left.
 */
export function alignText(str) {
  const lines = str.split('\n')
  const ret = lines.slice(1, lines.length - 1)
  const leadingSpaces = getLeadingSpaces(lines[1])

  return ret.map(line => {
    return line.split('').splice(leadingSpaces).join('')
  }).join('\n')
}

function getLeadingSpaces(str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      count++
    } else {
      return count
    }
  }
  return count
}
