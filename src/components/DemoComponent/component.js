import styles      from './component.scss'
import PropTypes   from 'prop-types'
import jsxToString from 'jsx-to-string'
import cx          from 'classnames'

import Code        from '~/components/Code'

function renderCodeSnippet({
  instance,
  displayName,
  codeSnippet,
  codeSnippetType,
}) {
  if (codeSnippet) {
    return <Code type={codeSnippetType}>
      {codeSnippet}
    </Code>
  }

  const opt = {}
  if (displayName) {
    opt.displayName = displayName
  }
  return <Code type={codeSnippetType || 'html'}>
    {jsxToString(instance, opt)}
  </Code>
}

function DemoComponent({
  demo,
  ...rest
}) {
  return <div
    {...rest}
    className={cx(styles.demo, rest.className)}
  >
    <div className={styles.instance}>
      {demo.instance}
    </div>

    <div className={styles.codeSnippet}>
      {renderCodeSnippet(demo)}
    </div>
  </div>
}

DemoComponent.propTypes = {
  demo: PropTypes.shape({
    instance       : PropTypes.node.isRequired,
    displayName    : PropTypes.string,
    codeSnippet    : PropTypes.string,
    codeSnippetType: PropTypes.string,
  }).isRequired,
}

export default DemoComponent
