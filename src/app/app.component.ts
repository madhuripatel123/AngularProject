import { Component } from '@angular/core';
import { MadhuriPatelComponent } from './madhuri-patel/madhuri-patel.component';
import { UserProfilesComponent } from './components/user-profiles/user-profiles.component';
import { CommonModule } from '@angular/common';
import { user } from '../Models/user';
import { JokeService } from './services/joke.service';
import { JokeComponent } from './components/joke/joke.component';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';
import { B2Component } from './components/b2/b2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MadhuriPatelComponent,UserProfilesComponent,CommonModule,JokeComponent,AComponent,B1Component,B2Component]
})
export class AppComponent {
  users=[
  {name:"Madhuri",issingle:true,Salary:90000},
  {name:"Priya",issingle:true,Salary:30000},
  {name:"Priyanka",issingle:true,Salary:40000}
]
receiveddata(e:user){
  console.log(e)
}
clear(){
  this.users=[];
}
}