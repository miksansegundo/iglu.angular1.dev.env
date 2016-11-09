import styles from './section-two.css'
import SectionTwoService from './section-two.service.js'

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
    $stateProvider.state('sectionTwo', {
      url: '/section-two',
      component: 'sectionTwo',
      resolve: {
        // data: (SectionOneService, $transition$) => SectionOneService.getData()
      }
    })
  })
