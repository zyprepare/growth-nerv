import Nerv from 'nervjs'
import LazyLoad from 'react-lazyload'
import LoadableHomeHeader from '@/floors/HomeHeader/loadableHomeHeader'
import HomeHeader from '@/floors/HomeHeader'
import '@/styles/base.scss'

const App = () => {
  return (
    <div className='homeApp'>
      <div style={{ height: '2000px' }}></div>
      <LazyLoad height={200} placeholderClassName={'mod_lazyload'}>
        <HomeHeader />
      </LazyLoad>
    </div>
  )
}

export default App
