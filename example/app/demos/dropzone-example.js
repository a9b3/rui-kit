import {
  Dropzone,
}         from '../../../src'

function timeoutAsync(cb) {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      cb()
    }, 500)
    setTimeout(() => {
      clearInterval(interval)
      resolve()
    }, 4000)
  })
}

async function uploadFiles(files, setProgress) {
  const promises = []
  for (let i = 0; i < files.length; i++) {
    promises.push(timeoutAsync(() => {
      setProgress(files[i].id, Math.random() * 100)
    }))
  }
  await Promise.all(promises)
}

export default class DropzoneExample extends React.Component {
  render() {
    return <div style={{
      height: 300,
    }}>
      <Dropzone
        uploadFiles={uploadFiles}
      />
    </div>
  }
}
