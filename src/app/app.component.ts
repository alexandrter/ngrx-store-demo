import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {clearAction, countSelector, increaseAction, randomNumberRequested, updateAtSelector} from "./reducers/couter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  counter$ = this.store.select(countSelector);
  updatedAt$ = this.store.select(updateAtSelector);

  constructor(private store: Store) {
  }

  increase() {
    this.store.dispatch(increaseAction());
  }

  clear() {
    this.store.dispatch(clearAction());
  }

  randomize() {
    this.store.dispatch(randomNumberRequested())
  }
}
