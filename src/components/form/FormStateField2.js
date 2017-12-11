import {noop} from 'lodash'

export default class FormStateFieldNode {
  key      = undefined
  children = undefined
  parent   = undefined

  add() {

  }

  get(path, cursor = this) {
    const tokens = path.split('.')
    const nextNode = cursor.children[tokens[0]]
    if (!nextNode) {
      throw new Error(`'${path}' does not exist`)
    }
    if (tokens.length === 1) {
      return nextNode
    }
    return this.get(tokens.slice(1).join('.'), nextNode)
  }

  create({path, type}) {
    this.get(path)
  }
}

class FormStateValue extends FormStateFieldNode {
  type         = 'value'
  value        = undefined
  initialValue = undefined
  validate     = noop
}

class FormStateArray extends FormStateFieldNode {
  type = 'array'
}

class FormStateMap extends FormStateFieldNode {
  type = 'map'
}

class FormState extends FormStateFieldNode {

}

export default class FormField extends React.Component {
  static propTypes = {}

  formField = {}

  componentWillMount() {
    const { type, name, formState } = this.props
    this.formField = formState.get(name) || formState.create({type, name})
  }

  onChange = (event) => {
    const {name, formState} = this.props
    const formStateField = formState.getFormStateField(name)
    formStateField.setValue(
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    )
  }

  getFormFieldProps = ({ onChange, ...props }) => {
    return {
      input: {
        onChange: compose(props.onChange, this.onChange),
        value: this.formField.value,
      },
      formField: this.formField,
      ...props,
    }
  }

  render() {
    const { render } = this.props
    return render({getFormFieldProps: this.getFormFieldProps})
  }
}

<Form type={Form.types.MAP}>
  <FormField
    name={'name'}
    type={Form.types.VALUE}
    render={({getFormFieldProps}) => {
      return <input type='text' {...getFormFieldProps().input} />
    }}
  />
  <FormField
    name={'hobbies'}
    type={Form.types.ARRAY}
    render={({getFormFieldProps}) => {
      const props = getFormFieldProps({})
      return <div>
        {
          values.map(({value, name}) => <FormField
            name={name}
            type={Form.types.MAP}
          />)
        }
        <button>Add Hobby</button>
      </div>
    }}
  />
</Form>
