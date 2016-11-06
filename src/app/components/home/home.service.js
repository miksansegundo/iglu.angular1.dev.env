export default class HomeService {
  constructor ($http, $timeout, $q) {
    'ngInject'
    // TODO: Add axios.js
    this.$http = $http
    this.$timeout = $timeout
    this.$q = $q
    this.data = null
  }
  getData () {
    // TODO: Add json-server
    // return this.$http.get('/api/todos').then(response => response.data)
    if (this.data) {
      console.log('Cached Home data fetched')
      return this.$q.when(this.data)
    } else {
      console.log('Fetching Home data...')
      return new Promise((resolve, reject) => {
        setTimeout(_ => {
          resolve(
            {
              list: [
                {
                  title: 'Titulo 1',
                  description: 'Description 1'
                },
                {
                  title: 'Titulo 2',
                  description: 'Description 2'
                },
                {
                  title: 'Titulo 3',
                  description: 'Description 3'
                },
                {
                  title: 'Titulo 4',
                  description: 'Description 4'
                }
              ]
            }
          )
        }, 3000)
      }).then(response => {
        this.data = response
        return response
      })
    }
  }
}
