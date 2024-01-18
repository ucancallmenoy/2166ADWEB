import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showText: boolean = false;

  toggleText() {
    this.showText = !this.showText;
  }

  staff = [ 
    { firstName: 'Mikaela', lastName: 'Luciano', email: 'mimika@gmail.com', role: 'LOML' },   
    { firstName: 'Aaron', lastName: 'Punzalan', email: 'punz@gmail.com', role: 'Employee' }, 
    { firstName: 'Patrick', lastName: 'Villanueva', email: 'patv@gmail.com', role: 'Accountant' }, 
    { firstName: 'Rolyn Joyce', lastName: 'Fernan', email: 'rols@gmail.com', role: 'Manager' },
    { firstName: 'Archie', lastName: 'Custodio', email: 'archie@gmail.com', role: 'Guard' },
    { firstName: 'Renz', lastName: 'Vitug', email: 'v2g@gmail.com', role: 'Employee' },   
    { firstName: 'Louis', lastName: 'Garcia', email: 'louiJ@gmail.com', role: 'Helper' } 
    ];
    

}
