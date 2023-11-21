class User {
  constructor(id, login) {
    this.id = id;
    this.login = login;
  }

  getLogin() {
    return this.login;
  }

  setLogin(login) {
    this.login = login;
  }
}

class Person {
  constructor(id, name) {
    this.id = id;
    this.sername = name;
  }
}
