
import styles from './root.css'

const appComponent = {
  bindings: {

  },
  controller: function () {
    this.view = 'list'
    this.viewChange = function ($event) {
      this.view = $event.data
    }
  },
  template: `
    <div class="${styles.root}">
      <p>App component: app.view = {{ $ctrl.view }}</p>
      <header view="$ctrl.view" view-change="$ctrl.viewChange($event)"></header>
      <home data="$ctrl.view"></home>
      <section-one data="$ctrl.view"></section-one>
    </div>
  `
}

export default appComponent
