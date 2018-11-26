import 'nerv-devtools'
import Nerv from 'nervjs'
import App from './app'

if (__ENV__) { // eslint-disable-line
  require('nerv-devtools')
}

Nerv.render(<App />, document.getElementById('app'))
