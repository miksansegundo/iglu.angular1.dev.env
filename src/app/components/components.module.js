
import home from './home/home.component'
import sectionOne from './section-one/section-one.component'
import profile from './profile/profile.component'

export default window.angular
  .module('components', [
    'ui.bootstrap',
    home.name,
    sectionOne.name,
    profile.name
  ])
