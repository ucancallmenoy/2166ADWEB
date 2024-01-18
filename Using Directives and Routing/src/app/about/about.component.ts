import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  position ='Coach';
  work_experience = 10;
  email = 'pmperez1@student.hau.edu.ph';
  website = 'https://hau.instructure.com/';
  phone = '0969';

  imageUrl:string='assets/me.jpg';
  imageW:number = 110;
  imageH:number = 100;

}
