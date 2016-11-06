
import home from './home/home.component'
import sectionOne from './section-one/section-one.component'
/*
import sectionOne from './section-one/section-one.component'
<home data="$ctrl.view"></home>
<section-one data="$ctrl.view"></section-one> */
export default window.angular
  .module('components', [
    home.name,
    sectionOne.name
  ])
