import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-madhuri-patel',
  standalone: true,
  templateUrl: './madhuri-patel.component.html',
  styles: [],
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
})
export class MadhuriPatelComponent {
  apple = 'help';
}
export class UserListComponent{
  hello='hii';
}