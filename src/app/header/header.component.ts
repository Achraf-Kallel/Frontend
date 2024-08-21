import { Component, EventEmitter, Output } from '@angular/core';
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

  protected showForm: boolean = false; // Initialize the form to false

  newEmployee: Employee = new Employee(0, '', '', '', 0);

  @Output() employeeAdded = new EventEmitter<Employee>();

  onEmployeeAddForm() {
    this.showForm = true;
  }

  checkInputs(): boolean {
    if (!this.newEmployee.id || !this.newEmployee.firstName || !this.newEmployee.lastName || !this.newEmployee.email || !this.newEmployee.salary) {
      alert('All fields are required.');
      return false;
    }
    return true;
  }

  addEmployee() {
    if (this.checkInputs()) {
      this.employeeAdded.emit(this.newEmployee);
      this.resetForm();
      this.onCancel(); // Close the form after adding
    }
  }

  onCancel() {
    this.showForm = false; // Close the form
  }

  resetForm() {
    this.newEmployee = new Employee(0, '', '', '', 0); // Reset the form fields
  }
}
