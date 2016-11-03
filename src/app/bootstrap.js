
import appName from './app.module'

window.angular.element(document).ready(function () {
  window.angular.bootstrap(document, [appName], { strictDi: true })
})
