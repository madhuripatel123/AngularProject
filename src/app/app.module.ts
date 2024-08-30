import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MadhuriPatelComponent } from './madhuri-patel/madhuri-patel.component'; // Adjust the path if needed
 
@NgModule({
  declarations: [
    AppComponent,
    MadhuriPatelComponent // Declare UserListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }