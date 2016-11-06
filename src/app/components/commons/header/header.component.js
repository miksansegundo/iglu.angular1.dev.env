
import styles from './header.css'

const headerComponent = {
  bindings: {
    data: '<',
    onLogout: '&',
    onLogin: '&'
  },
  controller: class HeaderCtrl {
    constructor (HeaderService, AuthService) {
      'ngInject'
      this.Auth = AuthService
      this.Header = HeaderService
      this.state = {}
    }
    $onInit () {
      console.log('Header Initialized')
      this.Header.fetch((data) => {
        console.log('Header Data Requested', data)
        this.state.loaded = true
        this.state.data = data
      })
    }
    $onChanges (changes) {
      if (changes.data.isFirstChange() === false) {
        console.log('Header Changed', changes.data)
      }
    }
    $onDestroy () {
      console.log('Header Destroyed')
      // Clean $postLink DOM event listeners
    }
    logout () {
      this.state.authData.pwd = ''
      this.onLogout()
    }
    login () {
      this.onLogin({ $event: this.state.authData })
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
            <p class="navbar-text" ng-if="!$ctrl.state.loaded">Fetching menu-items...</p>
            <ul class="nav navbar-nav">
              <li ng-repeat="item in $ctrl.state.data.menu" ui-sref-active="active">
                <a ui-sref="{{ item.link }}">{{ item.name }}</a>
              </li>
            </ul>
            <form class="navbar-form navbar-right" ng-if="!$ctrl.data.user.token" ng-submit="$ctrl.login($ctrl.authData)">
              <div class="form-group">
                <input required ng-model="$ctrl.state.authData.usr" type="text" class="form-control" placeholder="Username">
                <input required ng-model="$ctrl.state.authData.pwd" type="password" class="form-control" placeholder="Password">
              </div>
              <button type="submit" class="btn btn-default">Sign in</button>
            </form>
            
            <div class="navbar-right" ng-if="$ctrl.data.user.token">
              <p class="navbar-text">Signed in as <a ui-sref="profile" class="navbar-link">{{ $ctrl.data.user.name }}</a></p>            
              <ul class="nav navbar-nav">
                <li><a href="#" ng-click="$ctrl.logout()">Log out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <pre>{{ $ctrl.data | json}}</pre>  
    </div>
  `
}

export default headerComponent
