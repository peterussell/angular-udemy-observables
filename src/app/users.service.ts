import { Subject } from 'rxjs/Subject';

export class UsersService {
  /* A Subject is an *Observable and Observer* in a single object. This means
     you can call userActivated.next() in one place, and
     userActivated.subscribe() in another place -- both on the same object.

     See user.component.ts onActivate() for the .next() call, and
     app.componen.ts for .subscribe(). Subject also supports the error() and
     complete() functions, the same as an Observable.

     NB. IT IS BETTER TO USE A SUBJECT THAN AN EVENT EMITTER! */
  userActivated = new Subject();
}
