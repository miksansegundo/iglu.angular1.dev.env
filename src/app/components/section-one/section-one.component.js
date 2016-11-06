import styles from './section-one.css'
import SectionOneService from './section-one.service.js'

export default window.angular
  .module('section-one', ['ui.router'])
  // .service('SectionOneService', SectionOneService)
  .component('section1', {
    bindings: {
      data: '<'
    },
    template: `
      <div class="${styles.section}">
        <h1>Section one component</h1>
      </div>
    `
  })
  .config(($stateProvider) => {
    'ngInject'
    $stateProvider.state('section-one', {
      url: '/section-one',
      component: 'section1',
      resolve: {
        // data: (SectionOneService, $transition$) => SectionOneService.getData()
      }
    })
  })
