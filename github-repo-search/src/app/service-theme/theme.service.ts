// theme.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>('dark'); // Default theme is dark
  theme$ = this.themeSubject.asObservable();

  toggleTheme() {
    const currentTheme = this.themeSubject.getValue();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
    this.themeSubject.next(newTheme);
  }
}
