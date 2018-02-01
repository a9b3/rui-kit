import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { storiesOf }                        from '@storybook/react'
import React                                from 'react'

import FormFieldLayoutComponent             from './FormFieldLayoutComponent'

storiesOf('FormFieldLayoutComponent', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <div className={'rui'} style={{ width: '400px', background: 'white' }}>
        <FormFieldLayoutComponent
          modified={boolean('modified', false)}
          error={text('validationError', '')}
          label={text('label', 'Label')}
          path="foo"
          formFieldComponentProps={{
            formElementType: select(
              'formElementType',
              { input: 'input', select: 'select', textarea: 'textarea' },
              'input',
            ),
            onChange: () => {},
            value: text('value', ''),
            placeholder: 'Placeholder',
            options: [{ label: 'one', value: 'one' }],
          }}
        />
      </div>
    )
  })
