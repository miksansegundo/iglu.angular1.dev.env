
const name = 'navigation'
export default window.angular
  .module(name, [])
  .component(name, {
    bindings: {
      items: '<'
    },
    controller: class Ctrl {
      constructor () {
        'ngInject'
        console.log('Menu created')
      }
      $onInit () {
        console.log('Menu Initialized')
      }
    },
    template: `
      <ul class="nav navbar-nav">
        <li ng-repeat="item in $ctrl.items" ui-sref-active="active">
            <a ui-sref="{{ item.link }}">{{ item.name }}</a>
        </li>
      </ul>
    `
  })
