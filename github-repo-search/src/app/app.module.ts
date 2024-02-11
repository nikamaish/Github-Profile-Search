// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './Header/Header.component';  // Import the HeaderComponent
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.page';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
    // Other components
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),  // Add your routes inside the forRoot
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
