export class User {
  constructor(public id : string | null, public username : string, public fullname : string, public email : string, public password : string,
              public birthdate : Date, public zipcode : string, public number : string, public country : string) {
    this.id = id;
    this.username = username;
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    this.birthdate = birthdate;
    this.zipcode = zipcode;
    this.number = number;
    this.country = country;
  }
}
