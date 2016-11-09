import styles from './test-box.css'

const name = 'testBox'
export default window.angular
  .module(name, ['ui.bootstrap'])
  .component(name, {
    bindings: {
      test: '<',
      name: '<'
    },
    controller: class Ctrl {
      calcPercent (num) {
        return ((num * 158) / 100)
      }
    },
    template: `
      <div class="panel panel-default">
        <div class="panel-heading">{{ $ctrl.name }}</div>
        <div class="panel-body ${styles.panel}">
          <svg viewBox="0 0 32 32" class="${styles.chart}">
            <circle r="16" cx="16" cy="16" style="stroke-dasharray:{{ $ctrl.test.passed }} 100" class="${styles.pie}"/>
          </svg>
          <section class="${styles.chartText}">
            <div class="${styles.passedValue}">{{ $ctrl.test.passed }}%</div>
            <span class="${styles.passedText}">tests passed</span>
          </section>
          <uib-progressbar value="$ctrl.test.covered" type="success" class="${styles.progressBck}">
            <div class="${styles.progress}">{{ $ctrl.test.covered }}%</div> code covered
          </uib-progressbar>
        </div>
      </div>
    `
  })