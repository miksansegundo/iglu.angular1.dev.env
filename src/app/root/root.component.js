
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
      // this.state.user = this.Auth.login()
    }
    onLogout () {
      this.state.user = this.Auth.logout()
    }
    onLogin ($event) {
      this.state.user = this.Auth.login($event)
    }
  },
  template: `
    <div class="${styles.root}">
      <header data="$ctrl.state" on-logout="$ctrl.onLogout($event)" on-login="$ctrl.onLogin($event)"></header>
      <ui-view>
        <div class="well well-lg">Loading page...</div>
      </ui-view>
      <footer>
          MIT 2016.
      </footer>
    </div>
  `
}

export default appComponent
