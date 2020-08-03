import { Component, OnInit } from '@angular/core';
import {Person} from "./person.model";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
selectedPerson: Person;
  constructor() { }

  ngOnInit(): void {
  }

}
