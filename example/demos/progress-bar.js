import { ProgressBar } from '../../src'

export default {
  display          : 'ProgressBar',
  to               : '/progress-bar',
  demoComponentAttr: {
    header     : `<ProgressBar />`,
    description: 'Display a progress bar.',
    demos      : [
      <ProgressBar
        percent={40}
      />,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
      <ProgressBar
        percent={50}
      />,
          `,
  },
}
