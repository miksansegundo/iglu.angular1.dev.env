import styles from './home.css'
import photo from './img/big.jpg'
import logo from './img/angular.svg'
import HomeService from './home.service.js'

export default window.angular
  .module('home', ['ui.router'])
  .service('HomeService', HomeService)
  .component('home', {
    bindings: {
      data: '<'
    },
    template: `
      <div class="${styles.home}">
        <div class="page-header">
          <h1>Home component <small>List of items</small></h1>
        </div>
        <section class="list-group">
          <div ng-repeat="item in $ctrl.data.list" class="list-group-item">
            <h4 class="list-group-item-heading">{{ item.title }}</h2>
            <p class="list-group-item-text">{{ item.description }}</p>
          </div>
        </section>
        <h2>Responsive images</h2>
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
    $stateProvider.state('home', {
      url: '/',
      component: 'home',
      resolve: {
        data: (HomeService, $transition$) => HomeService.getData()
      }
    })
  })
