export function predicate(fn, message) {
  return (value) => {
    return fn(value) ? undefined : message
  }
}
