
import styles from './root.css'

const appComponent = {
  bindings: {

  },
  controller: class RootCtrl {
    constructor () {
      'ngInject'
      this.state = {}
    }
    $onInit () {
      // this.state.user = this.Auth.login()
    }
  },
  template: `
    <div class="${styles.root}">
      <header></header>
      <ui-view>
        <div class="well well-lg">Loading page...</div>
      </ui-view>
      <footer>
          Miguel San Segundo - MIT 2016.
      </footer>
    </div>
  `
}

export default appComponent
