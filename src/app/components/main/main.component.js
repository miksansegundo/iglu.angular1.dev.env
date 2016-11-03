import styles from './main.css'
import photo from './img/big.jpg'
import logo from './img/angular.svg'

const mainComponent = {
  bindings: {
    data: '<'
  },
  template: `
    <div class="${styles.root}">
      <h4>Main component!</h4>
      <p>Main view: {{ $ctrl.data }}</p>
      <figure>
        <img src="${logo}" alt="Logo AngularJS in SVG format" />
        <figcaption>Image SVG scalable with the best quality by default for responsive apps</figcaption>
      </figure>
      <figure>
        <img srcset="${photo.srcSet}" sizes="(min-width: 100%)" alt="Big Photo in JPG format" class="${styles.photo}" />
        <figcaption>Image JPG with a set of several sources by size for responsive apps</figcaption>
      </figure>
    </div>
  `
}

export default mainComponent
