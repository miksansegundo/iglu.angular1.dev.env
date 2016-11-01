
import '!style!css!postcss!./global.css'

import commons from './components/commons/commons.module'
import components from './components/components.module'
import root from './root.component'

window.angular
  .module('app', [
    commons,
    components
  ])
  .component('root', root)
