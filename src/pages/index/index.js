import 'nerv-devtools'
import Nerv from 'nervjs'
import Test from '@/components/Test'

if (__ENV__) { // eslint-disable-line
  require('nerv-devtools')
}

Nerv.render(<Test msg='world' />, document.getElementById('app'))
