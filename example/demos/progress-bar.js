import { ProgressBar } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'ProgressBar',
  to               : '/progress-bar',
  demoComponentAttr: {
    header     : `ProgressBar`,
    component: ProgressBar,
    description: 'Display a progress bar.',
    demos      : [
      {
        instance: <ProgressBar
          percent={40}
        />,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
