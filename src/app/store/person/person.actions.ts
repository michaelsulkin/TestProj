import {Action} from "@ngrx/store";
import {Person} from "./person.model";

export const GET_PERSON_DATA = 'GET_PERSON_DATA';
export const GET_PERSON_DATA_SUCCESS = 'GET_PERSON_DATA_SUCCESS';
export const GET_PERSON_DATA_FAILURE = 'GET_PERSON_DATA_FAILURE';

export class GetPersonData implements Action {
  readonly type = GET_PERSON_DATA;
}

export class GetPersonDataSuccess implements Action {
  readonly type = GET_PERSON_DATA_SUCCESS;
  constructor(public data: Person[]) {
  }
}

export class GetPersonDataFailure implements Action {
  readonly type = GET_PERSON_DATA_FAILURE;
  constructor(public error: any) {
  }
}

export type Actions = GetPersonData | GetPersonDataSuccess | GetPersonDataFailure;
