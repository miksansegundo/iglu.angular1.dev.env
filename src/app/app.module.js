
import '!style!css!postcss!./css/global.css'
import commons from './components/commons/commons.module'
import components from './components/components.module'
import root from './root/root.component'

export default window.angular
  .module('app', [
    commons.name,
    components.name
  ])
  .component('root', root)
