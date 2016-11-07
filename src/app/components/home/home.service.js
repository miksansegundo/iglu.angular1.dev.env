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
              list: [
                {
                  id: 1,
                  name: 'Task Name',
                  owner: 'Owner name',
                  state: {
                    code: 0,
                    label: 'Pending',
                    metrics: 0,
                    build: 0,
                    unitTest: 0,
                    functionalTest: 0
                  },
                  time: Date.now()
                },
                {
                  id: 2,
                  name: 'Task Name',
                  owner: 'Owner name',
                  state: {
                    code: 1,
                    label: 'Running',
                    metrics: 50,
                    build: 100,
                    unitTest: 80,
                    functionalTest: 90
                  },
                  time: Date.now(),
                  metrics: [
                    {
                      id: 0,
                      name: 'Test',
                      value: '64',
                      arrow: 'up'
                    },
                    {
                      id: 1,
                      name: 'Maintainability',
                      value: '53',
                      arrow: 'up'
                    },
                    {
                      id: 2,
                      name: 'Security',
                      value: '64',
                      arrow: 'right'
                    },
                    {
                      id: 3,
                      name: 'Workmanship',
                      value: '20',
                      arrow: 'down'
                    }
                  ]
                },
                {
                  id: 3,
                  name: 'Task Name',
                  owner: 'Owner name',
                  state: {
                    code: 2,
                    label: 'Complete',
                    metrics: 100,
                    build: 100,
                    unitTest: 100,
                    functionalTest: 100
                  },
                  time: Date.now()
                },
                {
                  id: 4,
                  name: 'Task Name',
                  owner: 'Owner name',
                  state: {
                    code: 3,
                    label: 'Rejected',
                    metrics: 100,
                    build: 100,
                    unitTest: 70,
                    functionalTest: 40
                  },
                  time: Date.now()
                }
              ]
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
