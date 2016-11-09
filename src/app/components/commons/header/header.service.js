export default class HeaderService {
  constructor () {
    'ngInject'
    console.log('Header Service Loaded')
  }
  getMenu () {
    return [
      {
        name: 'Home',
        link: 'home.list'
      },
      {
        name: 'Section 1',
        link: 'sectionOne'
      },
      {
        name: 'Section 2',
        link: 'sectionTwo'
      }
    ]
  }
}
