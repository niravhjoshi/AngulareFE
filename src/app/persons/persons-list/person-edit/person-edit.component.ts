import {Component, ElementRef, OnInit, Output, ViewChild,EventEmitter} from '@angular/core';

import {Person} from "../../person.model";

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  @ViewChild('PerFullName',{static:false}) PersonNameRef: ElementRef
  @ViewChild('PerEmail',{static:false}) PersonEmailRef: ElementRef
  @ViewChild('PerBDate',{static:false}) PersonBirthDateRef: ElementRef
  @ViewChild('PerGen',{static:false}) PersonGenderRef: ElementRef

  @Output() PersonAddedEventEmit = new EventEmitter<Person>();
  constructor() { }

  ngOnInit(): void {
  }

  AddPersontoArray(){
    const PFullName = this.PersonNameRef.nativeElement.value;
    const PBirthDate = this.PersonBirthDateRef.nativeElement.value;
    const PGender = this.PersonGenderRef.nativeElement.value;
    const PerEmail = this.PersonEmailRef.nativeElement.value;
    const newPerson = new Person('123',PFullName,PGender,'No Photo',PerEmail,PBirthDate)
    this.PersonAddedEventEmit.emit(newPerson);
  }
}
