import { Component } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {
  user = {
    name: '',
    email: '',
    age: '',
    contactNumber: ''
  };

  showSummary = false;

  apply() {
    this.showSummary = true;
  }
}
