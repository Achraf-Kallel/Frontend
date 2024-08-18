import { Component, OnInit  } from '@angular/core';
import { Employee } from '../employee.model';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  imports: [
    NgForOf
  ]
})
export class EmployeeListComponent implements OnInit {
  Employees: Employee[] = [
    new Employee(1,"achraf","kallel","achrafkallel29",2000)
  ];

  constructor() {}

  ngOnInit() {

  }


}
