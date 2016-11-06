
import home from './home/home.component'
import sectionOne from './section-one/section-one.component'
import profile from './profile/profile.component'

export default window.angular
  .module('components', [
    home.name,
    sectionOne.name,
    profile.name
  ])
