// home.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomeComponent {
  // You can add any logic or data needed for the home page
  username: string = '';
}
