// header.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent {
  @Input() appName: string = 'Your App';  // Default app name
}
