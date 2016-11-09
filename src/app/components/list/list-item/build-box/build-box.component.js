import styles from './build-box.css'

const name = 'buildBox'
export default window.angular
  .module(name, [])
  .component(name, {
    bindings: {
      date: '<'
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
        <div class="panel-heading">Build</div>
        <div class="panel-body ${styles.panel}">
          <div class="${styles.btns}">
            <button class="btn btn-lg btn-primary ${styles.btn}">
              <span class="glyphicon glyphicon-export"></span>
              Release
            </button>
            <button class="btn btn-lg btn-primary ${styles.btn}">
              <span class="glyphicon glyphicon-wrench"></span>
              Debug
            </button>
          </div>
          <p class="text-center ${styles.date}">{{ $ctrl.date | date:'h:mm a - M/d/yy' }}</p>
        </div>
      </div>
    `
  })
