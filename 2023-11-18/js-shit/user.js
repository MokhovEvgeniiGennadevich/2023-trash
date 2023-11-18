class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}

module.exports = User;
