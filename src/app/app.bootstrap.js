
import app from './app.module'

window.angular.element(document).ready(function () {
  window.angular.bootstrap(document, [app.name], { strictDi: true })
})
