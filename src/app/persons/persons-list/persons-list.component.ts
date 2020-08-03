import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from "../person.model";

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

@Output() List_PersonWasSelected_EE  = new EventEmitter<Person>();

persons: Person[] =[
  new Person('ABC-123','Nirav Joshi','Male',
    'https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg',
    'niravhjoshi@outlook.com','05-08-1984'),
  new Person('ABC-123','Pareen Joshi','Female',
    'https://cdn.psychologytoday.com/sites/default/files/styles/amp_metadata_content_image_min_1200px_wide/public/field_blog_entry_teaser_image/canstockphoto8481442-144x144-3_37-664_664.jpg?itok=hjrYHdKe',
    'pareen@outlook.com','21-08-2011')
];
  constructor() { }

  ngOnInit(): void {
  }

  List_OnSelectedPerson(SelPer:Person){
  this.List_PersonWasSelected_EE.emit(SelPer);
  }

  onPersonAdded(person: Person){
  this.persons.push(person);
  }
}
