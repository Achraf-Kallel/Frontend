export class Employee{
  public id:number;
  public firstName:string;
  public lastName:string;
  public email:string;
  public salary:number;

  constructor( id: number, firstName:string, lastName:string, email:string, salary:number) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.salary = salary;
  }

}
