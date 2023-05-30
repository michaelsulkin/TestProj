import {Injectable} from "@angular/core";
import {PersonService} from "../../service/person.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as PersonActions from './person.actions';
import {catchError, map, switchMap, withLatestFrom, of} from "rxjs";
import {Person} from "./person.model";
import {GetPersonDataFailure, GetPersonDataSuccess} from "./person.actions";

@Injectable()
export class PersonEffects {
  constructor(private svc: PersonService,
  private actions$: Actions) {
  }

  loadEmployees$ = createEffect(() => this.actions$.pipe(
    ofType<PersonActions.GetPersonData>(PersonActions.GET_PERSON_DATA),
    switchMap((action: PersonActions.GetPersonData) =>
      this.svc.getEmployees().pipe(
        map((list: Person[]) => new PersonActions.GetPersonDataSuccess(list) as any),
        catchError(error => of(new PersonActions.GetPersonDataFailure(error)))
      )
    )
  ));
}
