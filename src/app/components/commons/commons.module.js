
import headerComponent from './header/header.component'
import HeaderService from './header/header.service'

export default window.angular
  .module('commons', [
  ])
  .component('header', headerComponent)
  .service('HeaderService', HeaderService)
