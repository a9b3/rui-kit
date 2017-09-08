import doc from 'components/DocPage/doc'
import { ProgressBar } from '../../../src'

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
