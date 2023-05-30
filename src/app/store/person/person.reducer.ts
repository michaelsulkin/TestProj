import * as PersonActions from './person.actions';
import {Person} from "./person.model";
import {Action} from "@ngrx/store";

export interface PersonState {
  employees: Person[];
  loading: boolean;
  loadingError: any
}

export const PERSON_INIT_STATE: PersonState = {
  employees: [],
  loading: false,
  loadingError: null
};

export function personReducer(state: PersonState = PERSON_INIT_STATE, action: Action) {
  switch (action.type) {
    case PersonActions.GET_PERSON_DATA:
      return {
        ...state,
        loading: true,
        loadingError: null
      };
    case PersonActions.GET_PERSON_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        loadingError: null,
        employees: (action as PersonActions.GetPersonDataSuccess).data
      };
    case PersonActions.GET_PERSON_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        loadingError: (action as PersonActions.GetPersonDataFailure).error,
        employees: []
      };
    default:
      return state;
  }
}
