
import styles from './app.css'

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
      <p>App Component: app.view = {{ $ctrl.view }}</p>
      <header view="$ctrl.view" view-change="$ctrl.viewChange($event)"></header>
      <main data="$ctrl.view"></main>
    </div>
  `
}

export default appComponent
