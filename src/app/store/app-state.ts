import {Action, ActionReducer, ActionReducerMap, MetaReducer} from "@ngrx/store";
import {personReducer, PersonState} from "./person/person.reducer";
import {PersonEffects} from "./person/person.effects";
import {localStorageSync} from "ngrx-store-localstorage";

export const reducers: ActionReducerMap<AppState, Action> = {
  personState: personReducer
}

export interface AppState {
  personState: PersonState
}

export const effects = [PersonEffects];

export function localStorageReducer(reducer: ActionReducer<any>): MetaReducer<any> {
  return localStorageSync({
    keys: ['personState'],
    rehydrate: true,
    storage: localStorage
  })(reducer) as MetaReducer;
}

export function dataFlush(): any {

}

// export const metaReducers: Array<ActionReducer<any, any>> = [localStorageSync, /*dataFlush*/];
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageReducer /*, dataFlush*/];
