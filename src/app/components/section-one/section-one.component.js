import styles from './section-one.css'
import photo from './img/big.jpg'
import logo from './img/angular.svg'
import SectionOneService from './section-one.service.js'

export default window.angular
  .module('sectionOne', ['ui.router'])
  // .service('SectionOneService', SectionOneService)
  .component('sectionOne', {
    bindings: {
      data: '<'
    },
    template: `
      <div class="${styles.section}">
        <h1>Responsive images</h1>
        <p>Multiformat embed or linked images are available.</p>
        <figure>
          <img src="${logo}" alt="Logo AngularJS in SVG format" />
          <figcaption>Image SVG scalable with the best quality by default for responsive apps</figcaption>
        </figure>
        <figure>
          <img srcset="${photo.srcSet}" sizes="(min-width: 100%)" alt="Big Photo in JPG format" class="${styles.photo}" />
          <figcaption>Image JPG with a set of several sources by size for responsive apps</figcaption>
        </figure>
      </div>
    `
  })
  .config(($stateProvider) => {
    'ngInject'
    $stateProvider.state('sectionOne', {
      url: '/section-one',
      component: 'sectionOne',
      resolve: {
        // data: (SectionOneService, $transition$) => SectionOneService.getData()
      }
    })
  })
