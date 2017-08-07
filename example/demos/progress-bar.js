import { ProgressBar } from '../../src'

/* eslint-disable react/jsx-key */
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
/* eslint-enable react/jsx-key */
