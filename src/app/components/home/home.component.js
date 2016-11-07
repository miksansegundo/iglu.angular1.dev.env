import styles from './home.css'
import HomeService from './home.service.js'
import ListItem from './list-item.component'

export default window.angular
  .module('home', ['ui.router', ListItem.name])
  .service('HomeService', HomeService)
  .component('home', {
    bindings: {
      data: '<',
      user: '<'
    },
    controller: class Ctrl {
      constructor () {
        'ngInject'
      }
    },
    template: `
      <div class="${styles.home}">
        <div class="page-header">
          <h1>Home component <small>List of items</small></h1>
        </div>
        <p ng-if="!$ctrl.user.data.token">This content is restricted. Please log in first.</p>
        <div ng-if="$ctrl.user.data.token">
          <div class="container-fluid">
            <div class="row text-center ${styles.gridHead}">
              <div class="col-md-2">Changelist / Build</div>
              <div class="col-md-2">Owner</div>
              <div class="col-md-2">Time Started</div>
              <div class="col-md-1">State</div>
              <div class="col-md-1">Metrics</div>
              <div class="col-md-1">Build</div>
              <div class="col-md-1">Unit Test</div>
              <div class="col-md-2">Function Test</div>
            </div>
          </div>
          <div class="list-group">
             <list-item ng-repeat="item in $ctrl.data.list" item="item" 
              class="list-group-item container-fluid" 
              ng-class="{
                  'disabled': item.state.code === 0,
                  'list-group-item-info': item.state.code === 1,
                  'list-group-item-success': item.state.code === 2,
                  'list-group-item-danger': item.state.code === 3
              }"></list-item>
          </div>
        </div>
        <pre>User: {{ $ctrl.user | json }}</pre>
        <pre>Data: {{ $ctrl.data | json }}</pre>
      </div>
    `
  })
  .config(($stateProvider) => {
    'ngInject'
    $stateProvider.state('home', {
      url: '/',
      component: 'home',
      resolve: {
        user: AuthService => AuthService.getUser(),
        data: (HomeService) => HomeService.getData()
      }
    })
  })
