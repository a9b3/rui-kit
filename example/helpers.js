export function timeoutAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 5000)
  })
}
