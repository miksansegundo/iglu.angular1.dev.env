export default class AuthService {
  constructor () {
    this.user = {
      token: false
    }
  }

  logout () {
    this.user = {}
  }

  login (loginData) {
    this.user = {
      name: loginData.usr,
      token: 'dfsdfdsf-dsffdfsd-fdsfdsfs'
    }
    return this.user
  }

  getUser () {
    return this.user
  }
}
