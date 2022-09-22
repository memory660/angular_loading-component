import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { AutoUnsubscribe } from './auto-unsubscribe';

@Component({
  selector: 'app-auto-unsubscribing',
  templateUrl: './auto-unsubscribing.component.html',
  styleUrls: ['./auto-unsubscribing.component.scss']
})
@AutoUnsubscribe()
export class AutoUnsubscribingComponent implements OnInit, OnDestroy {
  private _sub1$?: Subscription;
  private _sub2$?: Subscription;

  constructor() {
    this._sub1$ = interval(500).subscribe();
    this._sub2$ = interval(500).subscribe();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // pas besoin

    // this._sub1$?.unsubscribe();
    // this._sub2$?.unsubscribe();
  }
}
