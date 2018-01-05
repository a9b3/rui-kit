import hljs from 'highlight.js'

export const highlightCode = (() => {
  const loaded = {}

  return function _highlightCode(rootElement, name) {
    if (name && !loaded[name]) {
      require(`!style-loader!css-loader!highlight.js/styles/${name}.css`)
      loaded[name] = true
    }
    const codeBlocks = rootElement.getElementsByTagName('code')
    for (let i = 0; i < codeBlocks.length; i++) {
      hljs.highlightBlock(codeBlocks[i])
    }
  }
})()
