import { withKnobs, select, text, boolean } from '@storybook/addon-knobs'
import { storiesOf }                        from '@storybook/react'
import React                                from 'react'

// import ExampleForm       from './ExampleForm'
import ExampleSimpleForm                    from './ExampleSimpleForm'

import FormState                            from '../FormState.js'
import FormField                            from '../components/FormField.js'
import { ruiForm }                          from '../index.js'
import { predicate }                        from '../index.js'
import hoistNonReactStatics                 from 'hoist-non-react-statics'
import { observer }                         from 'mobx-react'

@ruiForm()
@observer
class Foo extends React.Component {
  componentDidMount() {
    const { formState } = this.props
    setTimeout(() => {
      formState.value.get('name').value = 'hih'
      console.log(formState.toJS())
    }, 1000)
  }

  render() {
    const { formState } = this.props
    return (
      <form>
        <FormField
          path={'name'}
          formFieldArgs={{
            type: FormState.types.VALUE,
            validate: (value = '') =>
              predicate(value.length > 2, 'value must be higher than 2'),
          }}
          renderProps={{
            label: 'Name',
            formFieldComponentProps: { formElementType: 'input' },
          }}
          render={({ getInputProps }) => <div>{getInputProps().value}</div>}
        />
        {formState.validationError && 'validation error'}
        {JSON.stringify(formState.toJS())}
      </form>
    )
  }
}

function testDecorDecor() {
  return function testDecor(WrappedComponent) {
    class Wrapper extends React.Component {
      static displayName = `testDecor(${WrappedComponent.displayName ||
        WrappedComponent.name})`

      static propTypes = {}

      state = {
        formState: undefined,
      }

      componentWillMount() {
        const formState = new FormState()
        setTimeout(() => {
          formState.insert('name', {
            value: '',
            type: FormState.types.VALUE,
            validate: (value = '') =>
              predicate(value.length > 2, 'value must be higher than 2'),
          })
        }, 1000)
        this.setState({ formState })
      }

      render() {
        return (
          <WrappedComponent formState={this.state.formState} {...this.props} />
        )
      }
    }

    return hoistNonReactStatics(Wrapper, WrappedComponent)
  }
}

@observer
class BarBar extends React.Component {
  render() {
    return <div>hi</div>
  }
}

@testDecorDecor()
@observer
class Bar extends React.Component {
  componentDidMount() {
    const { formState } = this.props
    setTimeout(() => {
      formState.value.set('name', 'hih')
      console.log('still here', formState.toJS())
    }, 2000)
  }

  render() {
    const { formState } = this.props
    return (
      <form>
        {formState.validationError && 'validation error'}
        {JSON.stringify(formState.toJS())}
      </form>
    )
  }
}

storiesOf('Form', module)
  .addDecorator(withKnobs)
  .add('simple', () => {
    return (
      <div style={{ width: '500px' }}>
        <ExampleSimpleForm />
      </div>
    )
  })
