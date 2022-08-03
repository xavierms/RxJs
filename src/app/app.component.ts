import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, of, pipe } from 'rxjs';

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

  rxjsMapFilter(){
    const nums = of(1,2,3,4,5);

    const toQuared = pipe(
      filter((n: number) => n % 2 === 0),
      map(x => x * x)
    );

    const squared = toQuared(nums);
    squared.subscribe(x => console.log(x))
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
