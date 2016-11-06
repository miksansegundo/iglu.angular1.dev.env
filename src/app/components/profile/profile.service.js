export default class ProfileService {
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
          data: {
            linkedin: 'linkedin',
            pictures: 'pictures',
            hobbies: 'hobbies'
          }
        }), 3000)
      }).then(response => {
        this.data = response
        return response
      })
    }
  }
}
