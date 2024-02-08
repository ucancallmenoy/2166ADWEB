import { Component } from '@angular/core';
import {Observable, map, interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time$: Observable<Date>;
  title = 'midterm';
  presentDate = new Date();
  constructor() {
    this.time$ = interval(1000).pipe(map(()=> new Date()))
  }
  myName = "Patrick M. Perez";

  jeep: number = 13;
  jeep1: number = 0.23;
  pesos: number = 56.017;
  dollar: number = 1;
  num1: number = 19.1239;

  data: object = {
    name:"Noy", age:20, nickname:"Batman",
    places:[
      {pname: 'Gotham',level:'Hard'},
      {pname: 'Metropolis',level:'Mid'},
      {pname: 'Philippines',level:'Very Hard'}
    ]
  }

  a: number = 0.50;
  b: number = 0.25;
  c: number = 0.10;

  Perfume = ['Tom Ford F. Fabulous','Bvlgari Extreme','Versace Eros','Jean Paul Ultra Male','Stronger With You Intensely'];
}
