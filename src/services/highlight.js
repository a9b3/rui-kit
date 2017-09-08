import highlight from 'highlight.js'

export function highlightCode(rootElement, name) {
  if (name) {
    // require(`!style-loader!css-loader!highlight.js/styles/${name}.css`)
    require(`!style-loader!css-loader!highlight.js/styles/tomorrow-night-eighties.css`)
  }
  const codeBlocks = rootElement.getElementsByTagName('code')
  for (let i = 0; i < codeBlocks.length; i++) {
    highlight.highlightBlock(codeBlocks[i])
  }
}
