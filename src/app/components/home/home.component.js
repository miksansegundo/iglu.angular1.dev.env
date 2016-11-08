import styles from './home.css'
import HomeService from './home.service.js'
import List from './list/list.component'

const name = 'home'
export default window.angular
  .module(name, ['ui.router', List.name])
  .service('HomeService', HomeService)
  .component(name, {
    bindings: {
      data: '<',
      user: '<',
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
        <pre>User Data: {{ $ctrl.user | json }}</pre>
        <div ng-if="$ctrl.user.data.token">
          <pre>Home Data: {{ $ctrl.data | json }}</pre>
          <ui-view name="list"></ui-view>
        </div>
      </div>
    `
  })
  .config(($stateProvider) => {
    'ngInject'
    $stateProvider.state(name, {
      url: '/',
      abstract: true,
      component: name,
      resolve: {
        user: AuthService => AuthService.getUser(),
        data: (HomeService) => HomeService.getData()
      }
    })
  })
