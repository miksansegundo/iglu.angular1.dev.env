import styles from './section-two.css'
import SectionOneService from './section-one.service.js'

export default window.angular
  .module('sectionTwo', ['ui.router'])
  // .service('SectionOneService', SectionOneService)
  .component('sectionTwo', {
    bindings: {
      data: '<'
    },
    template: `
      <div class="${styles.section}">
        <h1>Section two component</h1>
      </div>
    `
  })
  .config(($stateProvider) => {
    'ngInject'
    $stateProvider.state('section-two', {
      url: '/section-two',
      component: 'sectionTwo',
      resolve: {
        // data: (SectionOneService, $transition$) => SectionOneService.getData()
      }
    })
  })
