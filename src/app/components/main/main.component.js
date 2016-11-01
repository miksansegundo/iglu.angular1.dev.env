import styles from './main.css'

const mainComponent = {
  template: `
    <div class="${styles.root}">
      <h4>Main component</h4>
      Main view: {{ $ctrl.data }}
    </div>
  `,
  bindings: {
    data: '<'
  }
}

export default mainComponent
