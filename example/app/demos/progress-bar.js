import { ProgressBar } from '../../../src'
import doc             from 'components/DocPage/doc'

export default doc({
  display  : 'ProgressBar',
  to       : '/progress-bar',
  component: ProgressBar,
  sections : [
    {
      header     : 'ProgressBar',
      description: 'A progress bar.',
      sections   : [
        {
          demo: <ProgressBar
            percent={40}
          />,
        },
      ],
    },
  ],
})
