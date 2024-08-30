import { CommonModule } from '@angular/common';
import { AfterViewInit, booleanAttribute, Component, ElementRef, EventEmitter, Input, numberAttribute, OnChanges, OnDestroy, OnInit, Output, output, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { user } from '../../../Models/user';
import { CountrycodePipe } from '../../pipes/countrycode.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-user-profiles',
  standalone: true,
  imports: [FormsModule,CommonModule,CountrycodePipe,HighlightDirective],
  templateUrl: './user-profiles.component.html',
  styleUrl: './user-profiles.component.css'
})
export class UserProfilesComponent implements  OnInit,OnDestroy,OnChanges,AfterViewInit {
  @Input({alias:"userName"}) name=""
  @Input({transform:booleanAttribute}) isSingle!:boolean;
  @Input({transform:numberAttribute}) Salary!:number;
  @Output() myevent=new EventEmitter<user>()
  senddata(){
    this.myevent.emit({name:this.name,newSalary:40000})
  }
//name="Madhuri patel"
bgColor="blue"
address="varanasi"
jobprofile="Software Engeenier"
salary=90000
isbtndisabled=true
phoneno=8712739173
isinputvalue="test"
users=[
  {name:"Madhuri",issingle:true,Salary:90000},
  {name:"Priya",issingle:true,Salary:30000},
  {name:"Priyanka",issingle:true,Salary:40000}
]
onchange(e:Event){
  const value=(e.target as HTMLInputElement).value
 this.isinputvalue=value
}

@ViewChild("myheading") heading?:ElementRef
constructor(){
//init properties
//dependences injection
//event listener register
console.log("constructor called",this.name,this.heading?.nativeElement.textContent);
}
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit',this.name,this.heading?.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchnages',this.name,this.heading?.nativeElement.textContent);
  }
ngOnInit(){
  //init properties
  //event lister register
  //initial api call
  console.log("ngOnInit Called",this.name,this.heading?.nativeElement.textContent)
}

ngOnDestroy(){
  //unregister event listener
  console.log("component destroyed")
}
}

