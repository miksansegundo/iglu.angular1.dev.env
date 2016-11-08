export default class ListService {
  constructor ($http, $q) {
    'ngInject'
    this.$http = $http
    this.$q = $q
  }
  getData () {
    // TODO: Add json-server
    // return this.$http.get('/api/list').then(response => response.data)
    console.log('Fetching List data...')
    return this.$q((resolve, reject) => {
      setTimeout(_ => {
        console.log('List data fetched')
        resolve(
          {
            list: [
              {
                id: 1,
                type: 'Build',
                name: 'Tenrox-R1_1235',
                owner: null,
                state: {
                  code: 1,
                  label: 'Pending',
                  metrics: {
                    code: 1,
                    value: 0
                  },
                  build: {
                    code: 1,
                    value: 0
                  },
                  unitTest: {
                    code: 1,
                    value: 0
                  },
                  functionalTest: {
                    code: 1,
                    value: 0
                  }
                },
                time: null
              },
              {
                id: 2,
                type: 'Firewall',
                name: '432472',
                owner: 'jtuck',
                state: {
                  code: 2,
                  label: 'Running',
                  metrics: {
                    code: 2,
                    value: 80
                  },
                  build: {
                    code: 1,
                    value: 0
                  },
                  unitTest: {
                    code: 1,
                    value: 0
                  },
                  functionalTest: {
                    code: 1,
                    value: 0
                  }
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
                  }
                ],
                build: {
                  date: new Date(2016, 11, 5).getTime()
                },
                unitTest: {
                  covered: 80,
                  passed: 60
                },
                functionalTest: {
                  covered: 40,
                  passed: 70
                }
              },
              {
                id: 3,
                type: 'Build',
                name: 'Tenrox-R1_1234',
                owner: null,
                state: {
                  code: 3,
                  label: 'Complete',
                  metrics: {
                    code: 3,
                    value: 100
                  },
                  build: {
                    code: 3,
                    value: 100
                  },
                  unitTest: {
                    code: 3,
                    value: 100
                  },
                  functionalTest: {
                    code: 3,
                    value: 100
                  }
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
                ],
                build: {
                  date: new Date(2016, 11, 5).getTime()
                },
                unitTest: {
                  covered: 80,
                  passed: 60
                },
                functionalTest: {
                  covered: 40,
                  passed: 70
                },
                result: {
                  succeed: true,
                  name: 'Metrics Reduction',
                  environments: [
                    {
                      id: 1,
                      name: 'Development'
                    },
                    {
                      id: 2,
                      name: 'Production'
                    }
                  ]
                }
              },
              {
                id: 4,
                type: 'Firewall',
                name: '432459',
                owner: 'samy',
                state: {
                  code: 3,
                  label: 'Accepted',
                  metrics: {
                    code: 3,
                    value: 100
                  },
                  build: {
                    code: 3,
                    value: 100
                  },
                  unitTest: {
                    code: 3,
                    value: 100
                  },
                  functionalTest: {
                    code: 3,
                    value: 100
                  }
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
                    value: '74',
                    arrow: 'right'
                  }
                ],
                build: {
                  date: new Date(2014, 4, 17).getTime()
                },
                unitTest: {
                  covered: 73,
                  passed: 76
                },
                functionalTest: {
                  covered: 23,
                  passed: 68
                },
                result: {
                  accepted: true,
                  name: 'Auto Merged'
                }
              },
              {
                id: 5,
                type: 'Firewall',
                name: '432460',
                owner: 'samy',
                state: {
                  code: 4,
                  label: 'Rejected',
                  metrics: {
                    code: 4,
                    value: 100
                  },
                  build: {
                    code: 1,
                    value: 0
                  },
                  unitTest: {
                    code: 1,
                    value: 0
                  },
                  functionalTest: {
                    code: 1,
                    value: 0
                  }
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
                    arrow: 'down'
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
                    value: '72',
                    arrow: 'right'
                  }
                ],
                result: {
                  type: 'Firewall',
                  name: 'Metrics Reduction',
                  accepted: false
                }
              }
            ]
          }
        )
      }, 1 * 1000)
    }).then(response => {
      return response.list
    })
  }
}
