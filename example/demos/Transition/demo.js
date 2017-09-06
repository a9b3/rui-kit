import uuid from 'uuid'
import {Transition} from '../../../src'

export default class TransitionDemo extends React.Component {
  state = {
    items: [],
  }

  add = () => {
    const {
      items,
    } = this.state
    const id = uuid.v4()
    items.push(id)
    this.setState({items})
  }

  remove = (i) => {
    const {
      items,
    } = this.state
    items.splice(i, 1)
    this.setState({items})
  }

  render() {
    const {
      items,
    } = this.state

    return <div>
      <button onClick={this.add}>Add</button>
      <button onClick={this.remove}>Remove</button>

      <Transition>
        {items.map((item, i) => <div key={item}
          onClick={() => this.remove(i)}
        >
          {item}
        </div>)}
      </Transition>
    </div>
  }
}
