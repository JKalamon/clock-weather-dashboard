import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentTime$ = interval(1000).pipe(
    map(() => new Date()),
    startWith(new Date())
  );  
}
