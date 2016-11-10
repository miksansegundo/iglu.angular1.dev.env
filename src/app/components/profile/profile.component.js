import styles from './profile.css'
import ProfileService from './profile.service.js'

const name = 'profile'
export default window.angular
  .module(name, ['ui.router'])
  .service('ProfileService', ProfileService)
  .component(name, {
    bindings: {
      data: '<',
      user: '<'
    },
    template: `
      <div class="${styles.section}">
        <h1>Profile component</h1>
        <pre>User: {{ $ctrl.user | json }}</pre>
        <pre>Profile: {{ $ctrl.data | json }}</pre>
      </div>
    `
  })
  .config(($stateProvider) => {
    'ngInject'
    $stateProvider.state(name, {
      url: '/' + name,
      component: name,
      resolve: {
        data: (ProfileService, $transition$) => ProfileService.getData(),
        user: AuthService => AuthService.getUser()
      }
    })
  })
