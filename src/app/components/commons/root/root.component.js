import styles from './root.css'
import Loading from '../loading/loading.component'

const name = 'root'
export default window.angular
  .module(name, [Loading.name])
  .component(name, {
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
          <div class="well well-lg">
            <loading>
              Fetching content...
            </loading>
          </div>
        </ui-view>
        <footer>
            Miguel San Segundo - MIT 2016.
        </footer>
      </div>
    `
  })
