import Nerv from 'nervjs'
import VipInfo from './VipInfo'
import Sidebar from './Sidebar'
import Test from '@/components/Test'
import log from '@/common/log'
import { getData } from '@/server/home'
import './index.scss'

class HomeHeader extends Nerv.Component {
  constructor() {
    super(...arguments)

    this.state = {
      msg1: '数据1',
      msg2: '数据2',
    }
  }

  componentDidMount() {
    log('别拦我，我要开始请求数据啦。。。')

    getData().then((res) => {
      log('别拦我，我要开始接收数据啦：', res)
    })

    new Promise((resolve, reject) => { // eslint-disable-line
      setTimeout(() => {
        resolve()
      }, 3000)
    }).then(() => {
      this.setState(Object.assign({}, this.state, {
        msg1: '数据1更新啦',
      }))

      import(
        /* webpackChunkName: "rightsMask" */
        '@/widgets/RightsMask'
      ).then((res) => {
        log('import content: ', res)
        // res.default(0)
      })
    })
  }

  render() {
    return (
      <div className="homeHeader">
        <VipInfo msg={this.state.msg1} />
        <Sidebar msg={this.state.msg2} />
        <Test msg="我是Test组件" />
      </div>
    )
  }
}

export default HomeHeader
