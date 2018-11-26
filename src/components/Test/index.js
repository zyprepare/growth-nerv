import Nerv from 'nervjs'
import './index.scss'

class Hello extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {
      message: 'world'
    }
  }

  render () {
    return (
      <div className="color">
        Hello, {this.state.message} {this.props.msg}
      </div>
    )
  }
}

export default Hello
