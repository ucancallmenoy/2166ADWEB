import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  greeting: string = "Hello!";
  message: string = "Welcome to my Fragrance Business!";
  userInput: string = "";
  showEnteredText: boolean = false;
  fontSize: number = 16;

  increaseFontSize() {
    this.showEnteredText = true;
    this.fontSize = 20;
  }
}
