
import List from './list.component'
import listJSON from '../../../../test/db.json'

describe('List Component', () => {
  let ListService
  let $ctrl
  let $scope
  let $element

  beforeEach(window.module(List.name))

  beforeEach(inject(($rootScope, $compile, _ListService_, $httpBackend) => {
    $httpBackend
      .when('GET', 'http://localhost:3000/list')
      .respond(200, listJSON)

    ListService = _ListService_
    $scope = $rootScope.$new()
    $element = window.angular.element('<list list="list"></list>')

    ListService.getData().then(data => {
      $scope.list = data.list
      $element = $compile($element)($scope)
      $ctrl = $element.controller('list')
    })

    $scope.$apply()
    $httpBackend.flush()
  }))

  describe('Service', () => {
    it('should has a getData method', () => {
      expect(ListService.getData).to.be.an('function')
    })
  })

  describe('Template', () => {
    it('should render the title List Component', () => {
      let h2 = $element.find('h2').eq(0)
      expect(h2.text()).to.equal('List Component')
    })

    it('should has a header with a 9 cols grid', () => {
      let cols = $element[0].querySelectorAll('section > .container-fluid > .row:first-child > div')
      expect(cols.length).to.equal(9)
    })

    it('should render 6 items in the list', () => {
      let listItems = $element.find('list-item').length
      expect(listItems).to.be.equal(6)
    })
  })

  describe('Bindings', () => {
    it('should has a binding on list property', function () {
      expect($ctrl.list).to.be.an('array')
    })
  })

  describe('Controller', () => {
    it('should has a json property', function () {
      expect($ctrl.json).to.be.an('string')
    })
    it('should has the constructor', function () {
      expect($ctrl.constructor).to.be.an('function')
    })
    it('should expose the method changeData', function () {
      expect($ctrl.changeData).to.be.an('function')
    })
  })
})
