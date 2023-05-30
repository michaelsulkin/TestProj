import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectAllEmployees} from "./store/person/person.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-test';

  constructor(store: Store) {
    store.select(selectAllEmployees).subscribe(state => {
      console.log(`app: ${JSON.stringify(state)}`);
    })
  }
}
