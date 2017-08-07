import {
  Dropzone,
} from '../../src'

/* eslint-disable react/jsx-key */
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

class DropzoneExample extends React.Component {
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

export default {
  display          : 'Dropzone',
  to               : '/dropzone',
  demoComponentAttr: {
    header     : `<Dropzone />`,
    description: 'Dropzone component.',
    demos      : [
      <DropzoneExample />,
    ],
    codeSnippetType: 'jsx',
    codeSnippet    : `
function timeoutAsync(cb) {
  return new Promise((resolve, reject) => {
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

class DropzoneExample extends React.Component {
  render() {
    return <div style={{
      height: 400,
    }}>
      <Dropzone
        uploadFiles={uploadFiles}
      />
    </div>
  }
}
          `,
  },
}
/* eslint-enable react/jsx-key */
