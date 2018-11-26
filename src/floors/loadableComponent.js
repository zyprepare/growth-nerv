import Nerv from 'nervjs'
import Loadable from 'react-loadable'

const loadableComponent = (opts) => {
  return Loadable({
    loader: opts.loader,
    delay: opts.delay || 300,
    loading: (props) => {
      if (props.error) {
        // 加载错误
        return <div>Error!</div>
      } else if (props.timedOut) {
        // 加载超时
        return <div>TimedOut!</div>
      } else if (props.pastDelay) {
        // 加载占位符
        return <div>Loading...</div>
      } else {
        return null
      }
    },
    render: (loaded, props) => {
      return <loaded.default {...props} />
    }
  })
}

export default loadableComponent
