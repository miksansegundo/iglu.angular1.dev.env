import styles from './home.css'

const name = 'listItem'
export default window.angular
  .module(name, ['ui.bootstrap'])
  .component(name, {
    bindings: {
      item: '<'
    },
    transclude: true,
    controller: class Ctrl {
      constructor () {
        'ngInject'
        console.log('Item-list created')
      }
      $onInit () {
        console.log('Item-list Initialized')
      }
      getType (stateCode) {
        stateCode = stateCode.toString()
        const types = {
          '0': null,
          '1': 'info',
          '2': 'success',
          '3': 'danger',
          'default': null
        }
        return types[stateCode] || types.default
      }
      getArrowColor (value) {
        const types = {
          'right': 'warning',
          'up': 'success',
          'down': 'danger',
          'default': 'info'
        }
        return types[value] || types.default
      }
    },
    template: `
    <a href="#" ng-init="$scope.isHide = true" ng-click="$scope.isHide = !$scope.isHide">
      <div class="row text-center ${styles.gridBody}">
        <div class="col-sm-2 text-left">{{ $ctrl.item.name }}</div>
        <div class="col-sm-2">{{ $ctrl.item.owner }}</div>
        <div class="col-sm-2">{{ $ctrl.item.time | date:'short' }}</div>
        <div class="col-sm-1">{{ $ctrl.item.state.label }}</div>
        <div class="col-sm-1">
          <uib-progressbar class="${styles.stateBar}" value="$ctrl.item.state.metrics" type="{{ $ctrl.getType($ctrl.item.state.code) }}"></uib-progressbar>
        </div>
        <div class="col-sm-1">
          <uib-progressbar class="${styles.stateBar}" value="$ctrl.item.state.build" type="{{ $ctrl.getType($ctrl.item.state.code) }}"></uib-progressbar>
        </div>
        <div class="col-sm-1">
          <uib-progressbar class="${styles.stateBar}" value="$ctrl.item.state.unitTest" type="{{ $ctrl.getType($ctrl.item.state.code) }}"></uib-progressbar>
        </div>
        <div class="col-sm-2">
          <uib-progressbar class="${styles.stateBar}" value="$ctrl.item.state.functionalTest" type="{{ $ctrl.getType($ctrl.item.state.code) }}"></uib-progressbar>
        </div>
      </div>
      <div uib-collapse="$scope.isHide">
        <div class="row ${styles.detail}">
          <div class="col-sm-4">
            <div class="panel panel-default ${styles.panel}">
              <div class="panel-heading">Metrics</div>
              <div class="panel-body">
                <div class="list-group ${styles.metrics}">
                  <div class="list-group-item" ng-repeat="metric in $ctrl.item.metrics track by $index">
                    <strong class="text-left">{{ metric.name }}</strong>
                    <span class="pull-right label label-{{ $ctrl.getArrowColor(metric.arrow) }} ${styles.metric}">
                        {{ metric.value }}
                        <span class="glyphicon glyphicon-arrow-{{ metric.arrow }}"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="panel panel-default ${styles.panel}">
              <div class="panel-heading">Build</div>
              <div class="panel-body">
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
    `
  })