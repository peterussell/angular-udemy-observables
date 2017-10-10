import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /* There are different methods of choosing when Observables should be
       emitted, in this case it emits an event at the interval (ms) passed
       to interval(). */
    const myNumbers = Observable.interval(1000);

    /* Subscribe has three handlers, each being a function passed as an
       argument to subscribe():
        1. normal data handling
        2. error handling
        3. completed handling */
    myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    )
  }

}
