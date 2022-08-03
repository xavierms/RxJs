import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AppRxJs';
  obs!: Observable<unknown>;


  ngOnInit(): void {

  }
  rxjsCountInterval(){
    const count = interval(1000);
    count.subscribe((n)=>{
      console.log(`Each  seconds`);
      
    })
  }

  rxjsObservable(){
    this.obs = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
     subscriber.next(3);
     setTimeout(() => {
       subscriber.next(4);
       subscriber.complete();
     }, 1000);
   });
    console.log('just before subscribe');
    this.obs.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');
  }
}
