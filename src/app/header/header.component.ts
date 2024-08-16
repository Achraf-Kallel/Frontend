import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  protected showForm: boolean = false; //initialize  the form to false

  onEmployeeAdd() {
    this.showForm = !this.showForm;
    console.log('Add employee button clicked');
  }
}
