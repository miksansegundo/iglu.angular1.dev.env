
import header from './header/header.component'
import userSection from './user-section/user-section.component'

export default window.angular
  .module('commons', [
    userSection.name,
    header.name
  ])
