
import styles from './header.css'
import HeaderService from './header.service'
import userSection from './user-section/user-section.component'
import navigation from './navigation/navigation.component'

export default window.angular
  .module('header', [userSection.name, navigation.name, 'ui.router'])
  .service('HeaderService', HeaderService)
  .component('header', {
    bindings: {
    },
    controller: class HeaderCtrl {
      constructor (HeaderService, AuthService, $state) {
        'ngInject'
        this.Auth = AuthService
        this.Header = HeaderService
        this.state = {
          brand: 'Angular Component-based'
        }
        this.state.menu = this.Header.getMenu()
        this.$state = $state
      }
      $onInit () {
        console.log('Header Initialized')
        this.Auth.restoreSessionFromToken().then((user) => {
          this.state.user = user
        })
      }
      $onDestroy () {
        console.log('Header Destroyed')
        // Clean $postLink DOM event listeners
      }
      onLogout () {
        this.Auth.logout()
        this.$state.go('home.list')
      }
      onLogin ($event) {
        this.Auth.login($event).then(user => {
          this.state.user = user
        })
      }
    },
    template: `
      <div class="${styles.header}">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="/">{{ $ctrl.state.brand }}</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <navigation items="$ctrl.state.menu"></navigation>
              <user-section user="$ctrl.state.user" on-logout="$ctrl.onLogout($event)" on-login="$ctrl.onLogin($event)"></user-section>
            </div>
          </div>
        </nav>
      </div>
    `
  })
