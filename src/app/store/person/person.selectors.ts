import {PersonState} from "./person.reducer";
import {createSelector} from "@ngrx/store";

export const selectEmployeeState = (state: any) => state.personState,
  selectAllEmployees = createSelector(selectEmployeeState, state => state.employees);
