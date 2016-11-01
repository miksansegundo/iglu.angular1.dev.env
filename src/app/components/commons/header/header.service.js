export default class HeaderService {
  constructor ($timeout) {
    'ngInject'
    console.log('Header Service Loaded')
    this.$timeout = $timeout
  }
  fetch (next) {
    this.$timeout(() => {
      next({
        title: 'Header component',
        menu: [
          {
            name: 'List',
            link: 'list'
          },
          {
            name: 'Table',
            link: 'table'
          }
        ]
      })
    }, 2000)
  }
}
