import {createAction, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";


export const increaseAction = createAction("[COUNTER] increase");
export const clearAction = createAction("[COUNTER] clear");

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
}

export const counterReducer = createReducer(
  initialState,
  on(increaseAction, state => ({
    ...state,
    count: state.count + 1,
  })),
  on(clearAction, state => ({
    ...state,
    count: 0,
  }))
);

const featureSelector = createFeatureSelector<CounterState>('counter')

export const countSelector = createSelector(featureSelector, state => state.count);
