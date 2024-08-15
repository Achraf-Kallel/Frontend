import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  Employees: Employee[] = [
    new Employee(1000, 'Achraf', 'Kallel', 'achraf.kallel@email.com', 5000),
    new Employee(1200, 'ahmedf', 'ali', 'ahmedl@email.com', 5100),
    new Employee(1300, 'salah', 'siala', 'salahsiala@email.com', 5200),
    new Employee(1400, 'ilyes', 'saaadaoui', 'ilyessaadaoui@email.com', 5300)
  ];

  ngOnInit() {
  }
}
