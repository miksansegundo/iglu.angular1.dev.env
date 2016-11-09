import styles from './list-item.css'
import MetricsBox from '../metrics-box/metrics-box.component'
import BuildBox from '../build-box/build-box.component'
import TestBox from '../test-box/test-box.component'
import ResultBox from '../result-box/result-box.component'

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
          <div ng-class="{
              'col-sm-1': $index < 3,
              'col-sm-2': $index === 3,
            }" ng-repeat="box in $ctrl.item.boxes | filter:{type: '!result'}" >
            <uib-progressbar class="${styles.stateBar}" value="box.value" 
              type="{{ $ctrl.getColor(box) }}"></uib-progressbar>
          </div>
        </div>
      </a>
      <div uib-collapse="$scope.isHide" class="container-fluid ${styles.animation}">
        <div class="row ${styles.detail}">
          <div class="col-sm-3" ng-repeat="box in $ctrl.item.boxes" ng-switch on="box.type">
            <metrics-box ng-switch-when="metrics"
              metrics="box.metrics" 
              ng-if="$ctrl.isBoxEnabled(box)"
              ng-class="{ '${styles.fail}': $ctrl.hasError(box) }"></metrics-box>
            <build-box ng-switch-when="build"
              date="box.date" 
              ng-if="$ctrl.isBoxEnabled(box)"
              ng-class="{ '${styles.fail}': $ctrl.hasError(box) }"></build-box>
            <test-box ng-switch-when="test"
              name="box.name" 
              test="box.tests"
              ng-if="$ctrl.isBoxEnabled(box)"
              ng-class="{ '${styles.fail}': $ctrl.hasError(box) }"></test-box>
            <result-box ng-switch-when="result"
              type="$ctrl.item.type"
              data="box"></result-box>
          </div>
        </div>
      </div>
    `
  })