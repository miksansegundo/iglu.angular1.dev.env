import styles from './list.css'
import ListService from './list.service'
import ListItem from './list-item/list-item.component'

const name = 'list'
export default window.angular
  .module(name, [ListItem.name])
  .service('ListService', ListService)
  .component(name, {
    bindings: {
      list: '<'
    },
    controller: class Ctrl {
      constructor () {
        'ngInject'
      }
    },
    template: `
      <div>
        <div class="container-fluid">
          <div class="row text-center ${styles.gridHead}">
            <div class="col-md-1">Type</div>
            <div class="col-md-2 text-left">Changelist / Build</div>
            <div class="col-md-1">Owner</div>
            <div class="col-md-2">Time Started</div>
            <div class="col-md-1">State</div>
            <div class="col-md-1">Metrics</div>
            <div class="col-md-1">Build</div>
            <div class="col-md-1">Unit Test</div>
            <div class="col-md-2">Function Test</div>
          </div>
        </div>
        <div class="list-group ${styles.list}">
           <list-item ng-repeat="item in $ctrl.list" item="item"></list-item>
        </div>
        <pre>List Data: {{ $ctrl.list | json }}</pre>
      </div>
    `
  }).config(($stateProvider) => {
    'ngInject'
    $stateProvider.state('home.list', {
      url: '',
      component: name,
      resolve: {
        list: (ListService) => ListService.getData()
      },
      views: {
        'list@home': 'list'
      }
    })
  })
