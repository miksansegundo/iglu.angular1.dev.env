export default class AuthService {
  constructor ($window, $q) {
    'ngInject'
    this.$q = $q
    this.$window = $window
    this.storage = this.$window.sessionStorage
    this.user = {
      data: {
        token: ''
      }
    }
  }
  logout () {
    this.user.data = {}
    this.removeToken()
    return this.user
  }
  login (loginData) {
    return this.$q((resolve, reject) => {
      setTimeout(_ => {
        resolve({
          name: loginData.usr,
          token: 'dfsdfdsf-dsffdfsd-fdsfdsfs'
        })
      }, 1 * 1000)
    }).then(response => {
      this.saveToken(response.token)
      this.user.data = response
      return this.user
    })
  }
  loginFromToken (token) {
    this.logging = this.$q((resolve, reject) => {
      setTimeout(_ => {
        this.isLogging = true
        resolve({
          name: 'Mik',
          token: 'dfsdfdsf-dsffdfsd-fdsfdsfs'
        })
      }, 1 * 1000)
    }).then(response => {
      this.user.data = response
      return this.user
    })

    return this.logging
  }
  isUserLogged () {
    return (!!this.user.token)
  }
  getUser () {
    if (this.isUserLogged()) {
      return this.$q.resolve(this.user)
    } else if (this.logging) {
      return this.logging
    } else {
      return this.user
    }
  }
  saveToken (token) {
    this.storage.setItem('user.token', token)
  }
  removeToken () {
    this.storage.removeItem('user.token')
  }
  restoreSessionFromToken () {
    const tokenInSession = this.getToken()
    if (tokenInSession) {
      return this.$q.resolve(this.loginFromToken(tokenInSession))
    } else {
      return this.$q.resolve(this.user)
    }
  }
  getToken () {
    return this.storage.getItem('user.token')
  }
}
