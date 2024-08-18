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

  checkInputs() {
    const inputIds = [
      { id: 'id', type: 'number', label: 'ID' },
      { id: 'firstName', type: 'text', label: 'First Name' },
      { id: 'lastName', type: 'text', label: 'Last Name' },
      { id: 'email', type: 'email', label: 'Email' },
      { id: 'salary', type: 'number', label: 'Salary' }
    ];

    for (let input of inputIds) {
      const inputElement = (document.getElementById(input.id) as HTMLInputElement).value;
      if (!inputElement) {
        alert(`Please enter a value for ${input.id}.`);
        return;
      }
    }
  }


}
