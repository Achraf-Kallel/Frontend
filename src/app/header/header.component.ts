import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from "@angular/common";
import { Employee } from '../employee.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf, FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  protected showForm: boolean = false;

  @Input() employee: Employee | null = null;
  newEmployee: Employee = new Employee(0, "", "", "", 0);

  @Output() employeeAdded = new EventEmitter<Employee>();

  //handle employee updated event
  ngOnChanges() {
    if (this.employee) {
      this.newEmployee = { ...this.employee };
      this.showForm = true;
    }
  }

  onEmployeeAddForm() {
    this.showForm = true;
  }

  checkInputs(): boolean {
    if (
      this.newEmployee.id === null || this.newEmployee.id === undefined ||
      !this.newEmployee.firstName.trim() ||
      !this.newEmployee.lastName.trim() ||
      !this.newEmployee.email.trim() ||
      this.newEmployee.salary === null || this.newEmployee.salary === undefined
    ) {
      alert('All fields are required.');
      return false;
    }
    return true;
  }

  addEmployee() {
    if (this.checkInputs()) {
      this.employeeAdded.emit(this.newEmployee);
      this.resetForm();
      this.onCancel();
    }
  }

  onCancel() {
    this.showForm = false;
    this.employee = null;
  }

  resetForm() {
    this.newEmployee = new Employee(0, "", "", "", 0);
  }
}
