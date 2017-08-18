import styles        from './demo.component.scss'
import PropTypes     from 'prop-types'
import jsxToString   from 'jsx-to-string'

import {
  Code,
}                    from '../index.js'

function renderCodeSnippet({
  instance,
  codeSnippet,
  codeSnippetType,
}) {
  if (codeSnippet) {
    return <Code type={codeSnippetType}>
      {codeSnippet}
    </Code>
  }

  return <Code type={codeSnippetType || 'html'}>
    {jsxToString(instance)}
  </Code>
}

function DemoComponent({
  demo,
  ...rest
}) {
  return <div
    styleName='demo'
    {...rest}
  >
    <div styleName='instance'>
      {demo.instance}
    </div>

    <div styleName='codeSnippet'>
      {renderCodeSnippet(demo)}
    </div>
  </div>
}

DemoComponent.propTypes = {
  demo: PropTypes.shape({
    instance       : PropTypes.node.isRequired,
    codeSnippet    : PropTypes.string,
    codeSnippetType: PropTypes.string,
  }).isRequired,
}

export default cssModule(DemoComponent, styles, {allowMultiple: true})
