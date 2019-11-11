class Auth {
  constructor() {
    this.authentificated = false;
  }

  login() {
    this.authentificated = true;
  }

  logout() {
    this.authentificated = false;
  }

  isAuthenticated() {
    return this.authentificated;
  }
}

export default new Auth();
