import styles from './header.css'

const headerComponent = {
  bindings: {
    view: '<',
    viewChange: '&'
  },
  controller: class HeaderCtrl {
    constructor (HeaderService) {
      'ngInject'
      this.HeaderService = HeaderService
      this.state = {}
    }
    $onInit () {
      console.log('Header Initialized')
      this.HeaderService.fetch((data) => {
        console.log('Header Data Requested', data)
        this.state.loaded = true
        this.state.data = window.angular.copy(data)
      })
    }
    $onChanges (changes) {
      if (changes.view.isFirstChange() === false) {
        console.log('Header Changed', changes.view)
      }
    }
    $onDestroy () {
      console.log('Header Destroyed')
      // Clean $postLink DOM event listeners
    }
    setView (view) {
      this.view = view
      this.viewChange({$event: {data: view}})
    }
  },
  template: `
    <div class="${styles.root}">
        <h3>{{ $ctrl.state.data.title }}</h3>
        <nav>
            <div ng-if="!$ctrl.state.data.menu">Fetching Data from Server...</div>
            <ul class="nav nav-pills">
                <li ng-repeat="item in $ctrl.state.data.menu" ng-class="{'active': $ctrl.view === item.link}" ><a class="btn btn-default btn-sm" ng-click="$ctrl.setView(item.link)">{{ item.name }}</a></li>
            </ul>
        </nav>
    </div>
  `
}

export default headerComponent
