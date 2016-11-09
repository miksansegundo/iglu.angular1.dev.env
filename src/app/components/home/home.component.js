import styles from './home.css'
import HomeService from './home.service.js'
import AuthService from '../../services/auth.service'
import List from '../list/list.component'

const name = 'home'
export default window.angular
  .module(name, ['ui.router', List.name])
  .service('AuthService', AuthService)
  .service('HomeService', HomeService)
  .component(name, {
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
          <h1>Home Component</h1>
        </div>
        <p ng-if="!$ctrl.user.data.token">Some content is restricted. Please log in first with any Username / Password ;)</p>
        <div ng-if="$ctrl.user.data.token">
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
        user: (AuthService) => AuthService.getUser(),
        data: (HomeService) => HomeService.getData()
      }
    })
  })
