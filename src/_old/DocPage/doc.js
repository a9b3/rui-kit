import invariant from 'invariant'

function section({
  header,
  description,
  source,
  // optional component
  demo,
  overrideDemo,
  // optional recursive structure
  sections = [],
}) {
  return {
    header,
    description,
    source,
    demo,
    overrideDemo,
    sections: sections.map(s => section(s)),
  }
}

export default function doc({
  component,
  // for router
  to,
  // for sidebar alert
  display,
  // optional
  sections = [],
} = {}) {
  invariant(to, `'to' must be provided.`)
  invariant(display, `'display' must be provided.`)

  return {
    // This flag is used in example/components/MainRouter to determine which
    // type of component to render for the given route. This is to preserve
    // backward compat with <DemoComponent />.
    isDoc   : true,
    component,
    to,
    display,
    sections: sections.map(s => section(s)),
  }
}
