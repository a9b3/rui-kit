import styles     from './styles.scss'
import PropTypes  from 'prop-types'

import DocSection from './DocSection'

function DocPage({
  isDoc, // eslint-disable-line
  to, // eslint-disable-line
  display, // eslint-disable-line
  component,
  sections,
}) {
  return <div className={styles.container}>
    {sections.map((section, i) => {
      return <DocSection
        section={section}
        key={i}
      />
    })}

    <div className={styles.bottom}>
      <div className={styles.description} />
      <div className={styles.source} />
    </div>
  </div>
}

DocPage.propTypes = {
  component: PropTypes.node.isRequired,
  sections : PropTypes.arrayOf(PropTypes.any),
}

DocPage.defaultProps = {
  component: <div />,
}

export default DocPage
