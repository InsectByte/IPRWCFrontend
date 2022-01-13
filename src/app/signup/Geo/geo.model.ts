export class Geo {
  constructor(public postalcode : string, public name : string, public countrycode : string, public adminName1 : string) {
    this.postalcode = postalcode;
    this.name = name;
    this.countrycode = countrycode;
    this.adminName1 = adminName1;
  }
}
