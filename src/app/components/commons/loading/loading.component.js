import spinner from './img/spinner.svg'
import styles from './loading.css'

const name = 'loading'
export default window.angular
  .module(name, [])
  .component(name, {
    transclude: true,
    template: `
      <div class="${styles.loading}">
        <div>
          <img src="${spinner}" alt="Loading..." />
          <p ng-transclude></p>
        </div>
      </div>
    `
  })
