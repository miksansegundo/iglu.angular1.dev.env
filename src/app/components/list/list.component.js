import styles from './list.css'
import ListService from './list.service'
import ListItem from './list-item/list-item.component'

const name = 'list'
export default window.angular
  .module(name, [ListItem.name, 'ui.router'])
  .service('ListService', ListService)
  .component(name, {
    bindings: {
      list: '<'
    },
    controller: class Ctrl {
      constructor () {
        'ngInject'
        this.json = JSON.stringify(this.list, null, 15)
      }
      changeData () {
        try {
          Object.assign(this.list, JSON.parse(this.json))
          this.jsonInvalid = false
        } catch (error) {
          this.jsonInvalid = true
          console.log('The JSON is not valid')
        }
      }
    },
    template: `
      <div>
        <section>
          <h2>List Component</h2>
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
             <list-item ng-repeat="item in $ctrl.list" item="item" opened="$ctrl.opened" on-collapse="$ctrl.opened = $event.id"></list-item>
          </div>
        </section>
        <section>
          <h2>JSON API Response</h2>
          <p>The next data structure is the list of objects rendered in the List Component. UI-Router resolved it requesting by HTTP a JSON Server.</p>
          <p>The area is editable so please feel free to change some values like types, names, codes, numbers or something more advanced to test the component reactions in live.</p>
          <div class="form-group" ng-class="{'has-error': $ctrl.jsonInvalid}">
              <textarea class="form-control" ng-style="{'width':'100%'}" rows="50" ng-model="$ctrl.json" ng-change="$ctrl.changeData()"></textarea>
          </div>
        </section>
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
