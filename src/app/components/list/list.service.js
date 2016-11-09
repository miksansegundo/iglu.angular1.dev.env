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
                time: null,
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
                }
              },
              {
                id: 2,
                type: 'Firewall',
                name: '432472',
                owner: 'jtuck',
                state: {
                  code: 2,
                  label: 'Running'
                },
                time: Date.now(),
                boxes: [
                  {
                    type: 'metrics',
                    code: 2,
                    value: 50,
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
                      }
                    ]
                  },
                  {
                    type: 'build',
                    code: 1,
                    value: 0
                  },
                  {
                    name: 'Unit Testing',
                    type: 'test',
                    code: 1,
                    value: 0
                  },
                  {
                    name: 'Functional Testing',
                    type: 'test',
                    code: 1,
                    value: 0
                  }
                ]
              },
              {
                id: 3,
                type: 'Build',
                name: 'Tenrox-R1_1234',
                owner: null,
                time: new Date(2016, 11, 5).getUTCDate(),
                state: {
                  code: 3,
                  label: 'Complete'
                },
                boxes: [
                  {
                    type: 'metrics',
                    code: 3,
                    value: 100,
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
                    type: 'test',
                    name: 'Unit Testing',
                    tests: {
                      covered: 80,
                      passed: 60
                    },
                    code: 3,
                    value: 100
                  },
                  {
                    type: 'build',
                    code: 3,
                    value: 100,
                    date: new Date(2016, 11, 5).getUTCDate()
                  },
                  {
                    type: 'test',
                    name: 'Functional Testing',
                    code: 3,
                    value: 100,
                    tests: {
                      covered: 40,
                      passed: 70
                    }
                  },
                  {
                    type: 'result',
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
                ]
              },
              {
                id: 4,
                type: 'Firewall',
                name: '432459',
                owner: 'samy',
                time: new Date(2014, 4, 17).getUTCDate(),
                state: {
                  code: 3,
                  label: 'Accepted'
                },
                boxes: [
                  {
                    type: 'metrics',
                    code: 3,
                    value: 100,
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
                    ]
                  },
                  {
                    type: 'build',
                    code: 3,
                    value: 100,
                    date: new Date(2014, 4, 17).getUTCDate()
                  },
                  {
                    type: 'test',
                    name: 'Unit Testing',
                    tests: {
                      covered: 73,
                      passed: 76
                    },
                    code: 3,
                    value: 100
                  },
                  {
                    type: 'test',
                    name: 'Functional Testing',
                    code: 3,
                    value: 100,
                    tests: {
                      covered: 23,
                      passed: 68
                    }
                  },
                  {
                    type: 'result',
                    accepted: true,
                    name: 'Auto Merged'
                  }
                ]
              },
              {
                id: 5,
                type: 'Build',
                name: 'Tenrox-R2_1234',
                owner: null,
                time: new Date(2014, 4, 18).getUTCDate(),
                state: {
                  code: 4,
                  label: 'Fail'
                },
                boxes: [
                  {
                    type: 'metrics',
                    code: 3,
                    value: 100,
                    metrics: [
                      {
                        id: 0,
                        name: 'Test',
                        value: '30',
                        arrow: 'down'
                      },
                      {
                        id: 1,
                        name: 'Maintainability',
                        value: '53',
                        arrow: 'right'
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
                        value: '90',
                        arrow: 'up'
                      }
                    ]
                  },
                  {
                    type: 'build',
                    code: 3,
                    value: 100,
                    date: new Date(2014, 4, 18).getUTCDate()
                  },
                  {
                    type: 'test',
                    name: 'Unit Testing',
                    tests: {
                      covered: 80,
                      passed: 30
                    },
                    code: 4,
                    value: 70
                  },
                  {
                    type: 'test',
                    name: 'Functional Testing',
                    code: 1,
                    value: 0
                  },
                  {
                    type: 'result',
                    succeed: false,
                    name: 'Test Failed'
                  }
                ]
              },
              {
                id: 6,
                type: 'Firewall',
                name: '432460',
                owner: 'samy',
                time: new Date(2014, 4, 19).getUTCDate(),
                state: {
                  code: 4,
                  label: 'Rejected'
                },
                boxes: [
                  {
                    type: 'metrics',
                    code: 4,
                    value: 100,
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
                    ]
                  },
                  {
                    type: 'build',
                    code: 1,
                    value: 0
                  },
                  {
                    type: 'test',
                    name: 'Unit Testing',
                    code: 1,
                    value: 0
                  },
                  {
                    type: 'test',
                    name: 'Functional Testing',
                    code: 1,
                    value: 0
                  },
                  {
                    type: 'result',
                    name: 'Metrics Reduction',
                    accepted: false
                  }
                ]
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
