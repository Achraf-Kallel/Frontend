import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent  , EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'employee-system';
}
