export default class HeaderService {
  constructor () {
    'ngInject'
    console.log('Header Service Loaded')
  }
  getMenu () {
    return [
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
  }
}
