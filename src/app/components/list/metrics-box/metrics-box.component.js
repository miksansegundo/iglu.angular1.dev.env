import styles from './metrics-box.css'

const name = 'metricsBox'
export default window.angular
  .module(name, [])
  .component(name, {
    bindings: {
      metrics: '<'
    },
    controller: class Ctrl {
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
      <div class="panel panel-default">
        <div class="panel-heading">Metrics</div>
        <div class="panel-body ${styles.panel}">
          <div class="list-group ${styles.metrics}">
            <div class="list-group-item" ng-repeat="metric in $ctrl.metrics">
              <strong class="text-left">{{ metric.name }}</strong>
              <span class="label label-{{ $ctrl.getArrowColor(metric.arrow) }} ${styles.metric}">
                  {{ metric.value }}
                  <span class="glyphicon glyphicon-arrow-{{ metric.arrow }}"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    `
  })