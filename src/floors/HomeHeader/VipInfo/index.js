import Nerv, { PropTypes } from 'nervjs'
import './index.scss'
import tips from '@/assets/sprite/tips.png'

class VipInfo extends Nerv.Component {
  constructor() {
    super(...arguments)

    this.state = {
      info: '我是会员信息组件'
    }
  }

  render() {
    let { msg } = this.props

    return (
      <div className="vipInfo">
        <p className="color">{this.state.info} <b>接受参数：{msg}</b></p>
        <img src={tips} />
        <div className="bg"></div>
        <div className="bg-2"></div>
        <div className="bg-3 font">123</div>123
      </div>
    )
  }
}

VipInfo.propTypes = {
  msg: PropTypes.string.isRequired,
}

export default VipInfo
