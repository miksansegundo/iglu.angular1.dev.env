import ListService from '../list.service'
import listItem from './list-item.component'
const listJSON = require('../../../../../test/db.json')

describe('ListItem Component', () => {
  let $ctrl
  let $scope
  let $element

  beforeEach(window.module(listItem.name))

  beforeEach(inject(($rootScope, $compile, $http, $httpBackend) => {
    $httpBackend
      .when('GET', 'http://localhost:3000/list')
      .respond(200, listJSON)

    $scope = $rootScope.$new()
    $element = window.angular.element('<list-item item="item"></list-item>')
    new ListService($http).getData().then(data => {
      $scope.item = data.list[1]
      $element = $compile($element)($scope)
      $ctrl = $element.controller('listItem')
    })

    $scope.$apply()
    $httpBackend.flush()
  }))

  describe('Template', () => {
    it('should render a link by each item', () => {
      let a = $element.find('a.list-group-item')
      expect(a).to.exist
    })

    it('should has a row with 9 cols', () => {
      let cols = $element[0].querySelectorAll('.list-group-item > .row > div')
      expect(cols.length).to.equal(9)
    })

    it('should has color blue with code 2', () => {
      let color = $element.find('.list-group-item-info').length
      expect(color).to.exist
    })
  })

  describe('Bindings', () => {
    it('should has a binding on item property', function () {
      expect($ctrl.item).to.be.an('object')
    })
  })

  describe('Controller', () => {
    it('should has the constructor', function () {
      expect($ctrl.constructor).to.be.an('function')
    })
    it('should has a typoFirewall property', function () {
      expect($ctrl.typoFirewall).to.be.equal('Firewall')
    })
    it('should has a typoBuild property', function () {
      expect($ctrl.typoBuild).to.be.equal('Build')
    })
    it('should has a pendingCode property', function () {
      expect($ctrl.pendingCode).to.be.equal(1)
    })
    it('should has a runningCode property', function () {
      expect($ctrl.runningCode).to.be.equal(2)
    })
    it('should has a completedCode property', function () {
      expect($ctrl.completedCode).to.be.equal(3)
    })
    it('should has a rejectedCode property', function () {
      expect($ctrl.rejectedCode).to.be.equal(4)
    })
    it('should expose the method getColor', function () {
      expect($ctrl.getColor).to.be.an('function')
    })
    it('should get the color by code', function () {
      expect($ctrl.getColor({code: 1})).to.be.an('null')
      expect($ctrl.getColor({code: 2})).to.be.equal('info')
      expect($ctrl.getColor({code: 3})).to.be.equal('success')
      expect($ctrl.getColor({code: 4})).to.be.equal('danger')
    })
  })
})
