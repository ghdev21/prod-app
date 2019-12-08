class Auth {
  constructor() {
    this.authentificated = true;
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
