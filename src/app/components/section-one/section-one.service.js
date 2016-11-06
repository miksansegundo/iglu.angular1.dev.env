export default class SectionOneService {
  constructor ($http, $q) {
    'ngInject'
    // TODO: Add axios.js
    this.$http = $http
    this.$q = $q
  }
  getData () {
    // TODO: Add json-server
    // return this.$http.get('/api/todos').then(response => response.data)
    if (this.data) {
      return this.$q.when(this.data)
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(resolve({
          data: 'Section one'
        }), 3000)
      }).then(response => {
        this.data = response
        return response
      })
    }
  }
}
