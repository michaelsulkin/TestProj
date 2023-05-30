import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectAllEmployees} from "../../../store/person/person.selectors";
import {GetPersonData} from "../../../store/person/person.actions";

@Component({
  selector: 'app-basic-rates',
  templateUrl: './basic-rates.component.html',
  styleUrls: ['./basic-rates.component.scss']
})
export class BasicRatesComponent implements OnInit {
  employees: any;

  constructor(store: Store) {
    store.select(selectAllEmployees).subscribe(state => {
      this.employees = state;
    })
    store.dispatch(new GetPersonData());
  }

  ngOnInit(): void {
  }

  get stringifiedData() {
    return JSON.stringify(this.employees, null, 4);
  }

}
