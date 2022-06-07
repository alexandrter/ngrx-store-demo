import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  clearAction,
  increaseAction,
  randomNumberLoaded,
  randomNumberRequested,
  updateTimestampAction
} from "./reducers/couter";
import {concatMap, map} from "rxjs/operators";
import {AppService} from "./app.service";

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions, private appService: AppService) {}

  countEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increaseAction, clearAction),
      map(() => updateTimestampAction({newTimestamp: Date.now()}))
    ));

  randomizeEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(randomNumberRequested), //catching action dispatched by component
      concatMap(() => this.appService.getRandomNumber().pipe( //making an api call
        map(response => randomNumberLoaded({newCount: response}))  //switching to another action with payload
      ))
    ))
}
