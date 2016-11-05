export default class AuthService {
  constructor () {
    this.user = {
      token: false
    }
  }

  logout () {
    this.user = {}
  }

  login (user, pass) {
    this.user = {
      name: 'Mik',
      token: 'dfsdfdsf-dsffdfsd-fdsfdsfs'
    }
    return this.user
  }

  getUser () {
    return this.user
  }
}
