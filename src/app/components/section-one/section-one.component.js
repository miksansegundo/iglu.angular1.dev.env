import styles from './section-one.css'

const sectionOneComponent = {
  bindings: {
    data: '<'
  },
  template: `
    <div class="${styles.root}">
      <h4>Section one component</h4>
      <p>Section data: {{ $ctrl.data }}</p>
    </div>
  `
}

export default sectionOneComponent
