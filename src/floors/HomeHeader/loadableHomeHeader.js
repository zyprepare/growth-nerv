import Nerv from 'nervjs'
import loadableComponent from '../loadableComponent'

const loadableHomeHeader = loadableComponent({
  loader: () => import('./index')
})

export default loadableHomeHeader
