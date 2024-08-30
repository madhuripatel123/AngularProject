import { computed, effect, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
private count=signal(0)
doublecount:Signal<number>=computed(()=>this.count()*2)
constructor(){
  effect(()=>{
    console.log("count:",this.count(),"double count:",this.doublecount)
  })
}
  getCounter(){
    return this.count()
  }
  incrementCounter(){
    // this.count.set(this.count()+1)
    this.count.update((oldval)=>{return oldval+1})
    // this.count=this.count+1
  }
}
