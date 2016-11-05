
import styles from './header.css'

const headerComponent = {
  bindings: {
    data: '<',
    onLogout: '&'
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
      this.onLogout({ $event: {data: 'hola'} })
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
              <li ng-repeat="item in $ctrl.state.data.menu" ui-sref="{{item.link}}" ui-sref-active="active" >
                <a href="#" ng-click="$ctrl.action(item.link)">{{ item.name }}</a>
              </li>
            </ul>
            <button type="button" class="btn btn-default navbar-btn navbar-right" ng-if="!$ctrl.data.user.token">Sign in</button>
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
