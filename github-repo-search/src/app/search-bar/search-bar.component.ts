// search-bar.component.ts

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';

  @Output() searchEmitter = new EventEmitter<string>();

  search() {
    this.searchEmitter.emit(this.searchTerm);
  }
}
