import {
  Dropfile,
} from '../../src'

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

class DropfileExample extends React.Component {
  render() {
    return <div style={{
      height: 400,
    }}>
      <Dropfile
        uploadFiles={uploadFiles}
      />
    </div>
  }
}

export default {
  display          : 'Dropfile',
  to               : '/dropfile',
  demoComponentAttr: {
    header     : `<Dropfile />`,
    description: 'Dropfile component.',
    demos      : [
      <DropfileExample />,
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

class DropfileExample extends React.Component {
  render() {
    return <div style={{
      height: 400,
    }}>
      <Dropfile
        uploadFiles={uploadFiles}
      />
    </div>
  }
}
          `,
  },
}
