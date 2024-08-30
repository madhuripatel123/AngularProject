import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';
import { error } from 'console';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {
  joke="loading"
constructor(private jokeservices:JokeService){

}
ngOnInit(){
this.getanotherjoke();
}
getanotherjoke(){
  this.jokeservices.getJoke().subscribe({next:(data:any)=>this.joke=data.value,
    error:(error)=>console.log("error",error)

  })
}
}
