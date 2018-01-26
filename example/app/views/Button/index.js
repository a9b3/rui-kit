import PropTypes  from 'prop-types'
import React      from 'react'

import { Button } from '../../../../src'
import Example    from 'components/Example'

export default function ButtonView() {
  return <Example sample={<Button>hi</Button>} />
}
ButtonView.propTypes = {}
