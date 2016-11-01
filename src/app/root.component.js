const rootComponent = {
  bindings: {

  },
  controller: function () {
    this.view = 'list'
    this.viewChange = function ($event) {
      this.view = $event.data
    }
  },
  template: `
    <pre>Root view: root.view = {{ $ctrl.view }}</pre>
    <header view="$ctrl.view" view-change="$ctrl.viewChange($event)"></header>
    <main data="$ctrl.view"></main>
  `
}

export default rootComponent
