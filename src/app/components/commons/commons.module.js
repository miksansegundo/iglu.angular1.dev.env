
import root from './root/root.component'
import header from './header/header.component'

export default window.angular
  .module('commons', [
    root.name,
    header.name
  ])
