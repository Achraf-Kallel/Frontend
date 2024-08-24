import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee.model";
import { NgForOf } from "@angular/common";
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  imports: [
    NgForOf ,HeaderComponent
  ]
})
export class EmployeeListComponent implements OnInit {
  Employees: Employee[] = [
    new Employee(1, "achraf", "kallel", "achrafkallel29", 2000)
  ];

  constructor() {}

  ngOnInit() {}



  //remove employee from the list
  onDeleteEmployee(employee: Employee) {
    const index = this.Employees.findIndex(emp => emp.id === employee.id);
    if (index !== -1) {
      this.Employees.splice(index, 1);
    }
  }

  selectedEmployee: Employee | null = null;

  onEditEmployee(employee: Employee) {
    this.selectedEmployee = { ...employee }; // Store a copy of the selected employee
    // Pass the selected employee to the header component for editing
    const headerComponent = new HeaderComponent();
    headerComponent.employee = this.selectedEmployee;
    headerComponent.onEmployeeAddForm(); // Show the form with the selected employee details
  }


  onEmployeeAdded(employee: Employee) {
    if (this.selectedEmployee) {
      // If editing, find the employee and update
      const index = this.Employees.findIndex(emp => emp.id === this.selectedEmployee!.id);
      if (index !== -1) {
        this.Employees[index] = employee;
      }
      this.selectedEmployee = null; // Clear the selection after update
    } else {
      // If not editing, add a new employee
      this.Employees.push(employee);
    }
  }



}
