export default class HomeService {
  constructor ($http, $timeout, $q) {
    'ngInject'
    // TODO: Add axios.js
    this.$http = $http
    this.$timeout = $timeout
    this.$q = $q
    this.data = null
  }
  getData (user) {
    // TODO: Add json-server
    // return this.$http.get('/api/todos').then(response => response.data)
    if (this.data) {
      console.log('Cached Home data fetched')
      return this.$q.resolve(this.data)
    } else {
      console.log('Fetching Home data...')
      return this.$q((resolve, reject) => {
        setTimeout(_ => {
          console.log('Home data fetched')
          resolve(
            {
              data: []
            }
          )
        }, 0 * 1000)
      }).then(response => {
        this.data = response
        return response
      })
    }
  }
}
