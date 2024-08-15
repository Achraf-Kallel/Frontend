export class Employee{
  public id:number;
  public First_Name:string;
  public Last_Name:string;
  public Email:string;
  public Salary:number;

  constructor( id: number, First_Name:string, Last_Name:string, Email:string, Salary:number) {
  this.id = id;
  this.First_Name = First_Name;
  this.Last_Name = Last_Name;
  this.Email = Email;
  this.Salary = Salary;
  }

}
