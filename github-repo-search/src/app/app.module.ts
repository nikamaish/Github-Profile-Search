// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './Header/Header.component';  // Import the HeaderComponent
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    // Other components
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])  // Add your routes inside the forRoot
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
