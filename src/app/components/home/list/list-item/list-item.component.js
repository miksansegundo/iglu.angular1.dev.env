import styles from './list-item.css'
import MetricsBox from './boxes/metrics-box/metrics-box.component'
import BuildBox from './boxes/build-box/build-box.component'
import TestBox from './boxes/test-box/test-box.component'
import ResultBox from './boxes/result-box/result-box.component'

const name = 'listItem'
export default window.angular
  .module(name, ['ui.bootstrap', MetricsBox.name, BuildBox.name, TestBox.name, ResultBox.name])
  .component(name, {
    bindings: {
      item: '<'
    },
    controller: class Ctrl {
      constructor () {
        'ngInject'
        this.typoFirewall = 'Firewall'
        this.typoBuild = 'Build'
        this.runningCode = 2
        this.completedCode = 3
        this.rejectedCode = 4
        this.isPending = (this.item.state.code === 1)
      }
      getColor (state) {
        const stateCode = state.code.toString()
        const types = {
          '1': null,
          '2': 'info',
          '3': 'success',
          '4': 'danger',
          'default': null
        }
        return types[stateCode] || types.default
      }
      hasError (boxState) {
        return (boxState.code === this.rejectedCode)
      }
      toggleHide (isHide) {
        if (this.isPending) {
          return true
        } else {
          return !isHide
        }
      }
      isBoxEnabled (state) {
        return (state.code > 1)
      }
    },
    template: `
      <a href="#" ng-init="$scope.isHide = true" 
        class="list-group-item ${styles.link}"
        ng-class="{
          'disabled': $ctrl.isPending,
          'list-group-item-info': $ctrl.item.state.code === $ctrl.runningCode,
          'list-group-item-success': $ctrl.item.state.code === $ctrl.completedCode,
          'list-group-item-danger': $ctrl.item.state.code === $ctrl.rejectedCode
        }"
        ng-click="$scope.isHide = $ctrl.toggleHide($scope.isHide)">
        <div class="row text-center ${styles.gridBody}">
          <div class="col-sm-1"><span class="glyphicon" 
            ng-class="{
              'glyphicon-fire': $ctrl.item.type === $ctrl.typoFirewall,
              'glyphicon-compressed': $ctrl.item.type === $ctrl.typoBuild
            }"></span></div>
          <div class="col-sm-2 text-left">{{ $ctrl.item.name }}</div>
          <div class="col-sm-1">{{ $ctrl.item.owner }}</div>
          <div class="col-sm-2">{{ $ctrl.item.time | date:'short' }}</div>
          <div class="col-sm-1">{{ $ctrl.item.state.label }}</div>
          <div class="col-sm-1">
            <uib-progressbar class="${styles.stateBar}" value="$ctrl.item.state.metrics.value" 
              type="{{ $ctrl.getColor($ctrl.item.state.metrics) }}"></uib-progressbar>
          </div>
          <div class="col-sm-1">
            <uib-progressbar class="${styles.stateBar}" value="$ctrl.item.state.build.value" 
              type="{{ $ctrl.getColor($ctrl.item.state.build) }}"></uib-progressbar>
          </div>
          <div class="col-sm-1">
            <uib-progressbar class="${styles.stateBar}" value="$ctrl.item.state.unitTest.value" 
              type="{{ $ctrl.getColor($ctrl.item.state.unitTest) }}"></uib-progressbar>
          </div>
          <div class="col-sm-2">
            <uib-progressbar class="${styles.stateBar}" value="$ctrl.item.state.functionalTest.value"
              type="{{ $ctrl.getColor($ctrl.item.state.functionalTest) }}"></uib-progressbar>
          </div>
        </div>
      </a>
      <div uib-collapse="$scope.isHide" class="container-fluid ${styles.animation}">
        <div class="row ${styles.detail}">
          <div class="col-sm-3">
            <metrics-box metrics="$ctrl.item.metrics" 
                ng-if="$ctrl.isBoxEnabled($ctrl.item.state.metrics)"
                ng-class="{ '${styles.fail}': $ctrl.hasError($ctrl.item.state.metrics) }"></metrics-box>
          </div>
          <div class="col-sm-3">
            <build-box date="$ctrl.item.build.date" 
              ng-if="$ctrl.isBoxEnabled($ctrl.item.state.build)"
              ng-class="{ '${styles.fail}': $ctrl.hasError($ctrl.item.state.build) }"></build-box>
          </div>
          <div class="col-sm-3">
            <test-box name="'Unit Testing'" 
              test="$ctrl.item.unitTest"
              ng-if="$ctrl.isBoxEnabled($ctrl.item.state.unitTest)"
              ng-class="{ '${styles.fail}': $ctrl.hasError($ctrl.item.state.unitTest) }"></test-box>
          </div>
          <div class="col-sm-3">
            <test-box name="'Functional Test'" 
              test="$ctrl.item.functionalTest"
              ng-if="$ctrl.isBoxEnabled($ctrl.item.state.functionalTest)"
              ng-class="{ '${styles.fail}': $ctrl.hasError($ctrl.item.state.functionalTest) }"></test-box>
          </div>
          <div class="col-sm-3">
            <result-box 
              ng-if="$ctrl.item.result"
              type="$ctrl.item.type"
              data="$ctrl.item.result"></result-box>
          </div>
        </div>
      </div>
    `
  })