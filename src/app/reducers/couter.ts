import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";


export const increaseAction = createAction("[COUNTER] increase");
export const clearAction = createAction("[COUNTER] clear");
export const updateTimestampAction = createAction("[COUNTER] update timestamp", props<{newTimestamp: number}>());

export const randomNumberRequested = createAction("[COUNTER] random number requested");
export const randomNumberLoaded = createAction("[COUNTER] random number loaded", props<{ newCount: number }>());

export interface CounterState {
  count: number;
  updateAt?: number
}

const initialState: CounterState = {
  count: 0,
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
  })),
  on(updateTimestampAction, (state, action) => ({
    ...state,
    updateAt: action.newTimestamp,
  })),
  on(randomNumberLoaded, (state, action) => ({
    ...state,
    count: action.newCount,
  })),
);

const featureSelector = createFeatureSelector<CounterState>('counter')

export const countSelector = createSelector(featureSelector, state => state.count);
export const updateAtSelector = createSelector(featureSelector, state => state.updateAt);
