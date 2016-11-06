
import styles from './header.css'
import HeaderService from './header.service'

export default window.angular
  .module('header', ['user.section'])
  .service('HeaderService', HeaderService)
  .component('header', {
    bindings: {
    },
    controller: class HeaderCtrl {
      constructor (HeaderService, AuthService) {
        'ngInject'
        this.Auth = AuthService
        this.Header = HeaderService
        this.state = {
          data: {
            title: 'Header component',
            menu: [
              {
                name: 'Home',
                link: 'home'
              },
              {
                name: 'Section 1',
                link: 'section-one'
              },
              {
                name: 'Section 2',
                link: 'section-two'
              }
            ]
          }
        }
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
              <a class="navbar-brand" href="/">{{ $ctrl.state.data.title }}</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li ng-repeat="item in $ctrl.state.data.menu" ui-sref-active="active">
                  <a ui-sref="{{ item.link }}">{{ item.name }}</a>
                </li>
              </ul>
              <user user="$ctrl.state.user" on-logout="$ctrl.onLogout($event)" on-login="$ctrl.onLogin($event)"></user>
            </div>
          </div>
        </nav>
      </div>
    `
  })