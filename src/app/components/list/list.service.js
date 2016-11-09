export default class ListService {
  constructor ($http) {
    'ngInject'
    this.$http = $http
  }
  getData () {
    return this.$http.get('http://localhost:3000/list').then(response => response.data)
  }
}
