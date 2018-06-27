class People {
  constructor({ name, describe, age }) {
    this.name = name
    this.describe = describe
    this.age = age
  }
  updateName(name) {
    this.name = name;
    return this
  }
  updateDescribe(describe) {
    this.describe = describe;
    return this
  }
  updateAge(age) {
    this.age = age;
    return this
  }
}

export default People
