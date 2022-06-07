import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {clearAction, increaseAction, updateTimestampAction} from "./reducers/couter";
import {map} from "rxjs/operators";

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions) {}

  countEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increaseAction, clearAction),
      map(() => updateTimestampAction({newTimestamp: Date.now()}))
    ))
}
