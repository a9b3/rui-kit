export default function predicate(fn, message) {
  return (...args) => {
    if (!fn(...args)) {
      return message
    }
  }
}
