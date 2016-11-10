import styles from './user-section.css'

export default window.angular
  .module('userSection', [])
  .component('userSection', {
    bindings: {
      user: '<',
      onLogout: '&',
      onLogin: '&'
    },
    controller: class UserCtrl {
      constructor () {
        'ngInject'
        this.state = {
          authData: {
            usr: '',
            pwd: ''
          },
          disableLogin: false
        }
      }
      $onInit () {
        console.log('User Initialized')
      }
      $onChanges (changes) {
        if (changes.user.isFirstChange() === false) {
          console.log('User Changed', changes.user)
        }
      }
      logout () {
        this.state.disableLogin = false
        delete this.state.authData
        this.onLogout()
      }
      login () {
        this.state.disableLogin = true
        this.onLogin({ $event: this.state.authData })
      }
    },
    template: `
      <div class="${styles.userSection} navbar-right">
        <p class="navbar-text" ng-if="!$ctrl.user || !$ctrl.user.data.token && $ctrl.state.disableLogin">Authenticating...</p>
        <form class="navbar-form navbar-right" ng-if="$ctrl.user && !$ctrl.user.data.token" ng-submit="$ctrl.login()">
          <div class="form-group">
            <input required ng-model="$ctrl.state.authData.usr" type="text" class="form-control" placeholder="Username">
            <input required ng-model="$ctrl.state.authData.pwd" type="password" class="form-control" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-default" ng-disabled="$ctrl.state.disableLogin">Sign in</button>
        </form>
        <div ng-if="$ctrl.user.data.token">
          <button type="button" class="btn btn-default navbar-btn" ui-sref="profile" ui-sref-active="active">
            <span ui-sref="profile" class="glyphicon glyphicon-user" aria-hidden="true"></span>   
            {{ $ctrl.user.data.name }}
          </button>  
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#" ng-click="$ctrl.logout()">Log out</a></li>
          </ul>
        </div>
      </div>
    `
  })
