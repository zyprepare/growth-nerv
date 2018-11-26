import Nerv, { PropTypes } from 'nervjs'
import './index.scss'

class Sidebar extends Nerv.Component {
  render () {
    let { msg } = this.props

    return (
      <div className="sidebar">
        <p className="color">我是Sidebar组件 <b>接受参数：{msg}</b></p>
      </div>
    )
  }
}

Sidebar.propTypes = {
  msg: PropTypes.string.isRequired,
}

export default Sidebar
