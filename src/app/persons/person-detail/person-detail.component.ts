import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../person.model";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  @Input() person: Person;
  constructor() { }

  ngOnInit(): void {
  }

}
