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
            name: 'Home',
            link: 'home'
          },
          {
            name: 'Section 1',
            link: 'section-one'
          },
          {
            name: 'Section 2',
            link: 'section-two'
          }
        ]
      })
    }, 2000)
  }
}
