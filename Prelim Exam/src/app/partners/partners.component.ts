import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {

  showText: boolean = false;
  toggleText() {
    this.showText = !this.showText;
  }

  partners = [ 
    { company: 'Dior', owner: "Delphine Arnault", sponsorship: 'Gold', website: 'https://www.dior.com/' },   
    { company: 'Tom Ford', owner: "The Estée Lauder Companies", sponsorship: 'Silver', website: 'https://www.tomford.com/' }, 
    { company: 'Lattafa', owner: "Mr. Sheikh Shahid Ahmad", sponsorship: 'Silver', website: 'https://lattafa.com/' }, 
    { company: 'Versace', owner: "Michael Kors Limited", sponsorship: 'Diamond', website: 'https://www.versace.com/' }
    ];

}
