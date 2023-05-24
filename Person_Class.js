write a "person" class to hold all the deatils

class person {
    constructor(name, age, gender, email, mobile_number, city, country) {
      this.name = name
      this.age = age
      this.gender = gender
      this.email = email
      this.mobile_number = mobile_number
      this.city = city
      this.country = country
    }
    getName() {
      return this.name
    }
    getAge() {
      return this.age
    }
    getGender() {
      return this.gender
    }
    getEmail() {
      return this.email
    }
    getMobileNumber() {
      return this.mobile_number
    }
    getCity() {
      return this.city
    }
    getCountry() {
      return this.country
    }
    setName(name) {
      this.name = name
    }
    setAge(age) {
      this.age = age
    }
    setGender(gender) {
      this.gender = gender
    }
    setEmail(email) {
      this.email = email
    }
    setMobileNumber(mobile_number) {
      this.mobile_number = mobile_number
    }
    setCity(city) {
      this.city = city
    }
    setCountry(country) {
      this.country = country
    }
  }
  
  const person1 = new person("Gold",27,"male","Parvathythangam1402@gmail.com",9600704401,"Coimbatore","INDIA")
  const person2 = new person("paru",22,"female","paru@gmail.com",8098982615,"Karur","INDIA")
  console.log(person2.getName()) // "paru"
  console.log(person1.getCity()) //"Coimbatore"
person2.setCity("OOTY")
console.log(person2.getCity())  //"OOTY"
person1.setName("Thangam")
console.log(person1.getName())  //"Thangam"
