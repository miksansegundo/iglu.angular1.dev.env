
import '!style!css!postcss!./css/global.css'
import commons from './components/commons/commons.module'
import components from './components/components.module'
import AuthService from './services/auth.service'

export default window.angular
  .module('app', [
    'ui.router',
    commons.name,
    components.name
  ])
  .service('AuthService', AuthService)
  .config(($locationProvider) => {
    'ngInject'
    $locationProvider.html5Mode(true)
  })
