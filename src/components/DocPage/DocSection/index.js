import styles      from './styles.scss'
import PropTypes   from 'prop-types'
import jsxToString from 'jsx-to-string'
import cx          from 'classnames'

import Markdown    from '~/components/Markdown'
import Code        from '~/components/Code'

function renderCodeSnippet({
  /* eslint-disable */
  demo,
  overrideDemo: {
    displayName,
    codeSnippet,
    codeSnippetType,
  } = {},
  /* eslint-enable */
}) {
  console.log(codeSnippet)
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
    {jsxToString(demo, opt)}
  </Code>
}

function DocSection({
  section: {
    header,
    source,
    description,
    demo,
    overrideDemo,
    sections = [],
  },
}) {
  console.log(header)
  return <div
    className={cx(
      styles.wrapper,
    )}
  >
    {
      header && <article className={cx(styles.section, styles.header)}>
        <section className={styles.description}>
          {
            typeof header === 'string' ? <h3 style={{marginBottom: 0}}>{header}</h3> : header
          }
        </section>
        <section className={styles.source} />
      </article>
    }

    <article className={styles.section}>
      <section className={styles.description}>
        {
          demo && <div className={styles.demo}>
            {demo}
          </div>
        }

        <Markdown
          source={description}
        />
      </section>

      <section className={styles.source}>
        {
          (demo || overrideDemo) && renderCodeSnippet({demo, overrideDemo})
        }

        <Markdown
          theme={'tomorrow-night-eighties'}
          source={source}
        />
      </section>
    </article>

    {sections.map((s, i) => <DocSection key={i} section={s} />)}
  </div>
}

DocSection.propTypes = {
  section: PropTypes.shape({
    header      : PropTypes.any,
    source      : PropTypes.string,
    demo        : PropTypes.node,
    overrideDemo: PropTypes.object,
    description : PropTypes.string,
    sections    : PropTypes.arrayOf(PropTypes.any),
  }),
}

export default DocSection
