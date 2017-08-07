export function timeoutAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 5000)
  })
}
