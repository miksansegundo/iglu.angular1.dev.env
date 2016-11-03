
import '!style!css!postcss!./global.css'
import commons from './components/commons/commons.module'
import components from './components/components.module'
import app from './app.component'

export default window.angular
  .module('app', [
    commons,
    components
  ])
  .component('app', app).name
