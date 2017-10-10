import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // We need to unsubscribe, or we'll create a memory leak! (ngOnDestroy)
    const numbersObservable = Observable.interval(1000);
    this.numbersObsSubscription = numbersObservable.subscribe((number: number) => {
      console.log(number);
    });

    /* A more complex example of an observable made from scratch. Note that
       the 'observer' passed in to the anonymous function here is the final
       observer which will receive the result of the subscription.

       Observer.create takes the function to be run, passing in the Observer. */
    const customObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('hello!');
      }, 2000);

      setTimeout(() => {
        observer.next('hello again!');
      }, 4000);

      setTimeout(() => {
        // observer.error('this doesn\'t work');
        observer.complete();
      }, 5000);

      // An example of an next that will never get fired because we already completed.
      setTimeout(() => {
        observer.next('a hello you will never see');
      }, 6000);
    })

    this.customObsSubscription = customObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('Completed!'); } // completed receives no args
    );
  }

  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }
}
