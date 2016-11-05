
import styles from './root.css'

const appComponent = {
  bindings: {

  },
  controller: class RootCtrl {
    constructor (AuthService) {
      'ngInject'
      this.state = {}
      this.Auth = AuthService
    }
    $onInit () {
      this.state.user = this.Auth.login()
    }
    onLogout () {
      this.state.user = this.Auth.logout()
    }
  },
  template: `
    <div class="${styles.root}">
      <header data="$ctrl.state" on-logout="$ctrl.onLogout($event)"></header>
      <ui-view/>
      <footer>
          MIT 2016.
      </footer>
    </div>
  `
}

export default appComponent
