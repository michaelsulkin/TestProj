import {Injectable} from "@angular/core";
import {Person} from "../store/person/person.model";
import {Observable, of} from "rxjs";

@Injectable()
export class PersonService {
  getEmployees(): Observable<Person[]> {
    return of([{
      firstName: 'Mike',
      lastName: 'Su'
    }, {
      firstName: 'Olga',
      middleName: 'Osleek',
      lastName: 'Bu'
    }])
  }
}
