import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {clearAction, countSelector, increaseAction} from "./reducers/couter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  counter$ = this.store.select(countSelector);
  updatedAt?: number;

  constructor(private store: Store) {
  }

  increase() {
    this.store.dispatch(increaseAction());
    this.updatedAt = Date.now();
  }

  clear() {
    this.store.dispatch(clearAction());
    this.updatedAt = Date.now();
  }

}
