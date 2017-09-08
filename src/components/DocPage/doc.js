import invariant from 'invariant'

function section({
  header,
  description,
  source,
  // optional component
  demo,
  // optional recursive structure
  sections = [],
}) {
  invariant(header, `'header' should be provided.`)

  return {
    header,
    description,
    source,
    demo,
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
  invariant(component, `'component' must be provided.`)
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
