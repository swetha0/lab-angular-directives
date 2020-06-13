import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-ngfor-app';
  mobiles: string[]=['Iphone','Galaxy 9.0','Blackberry 10z']
}