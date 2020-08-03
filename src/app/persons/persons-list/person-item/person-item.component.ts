import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Person} from "../../person.model";

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {
  @Input() per: Person;
  @Output() person_item_Selected_EE = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  OnClickedPerson_item(){
    this.person_item_Selected_EE.emit();
  }
}
