import { Component, OnInit } from '@angular/core';
import {Earningtype} from "../earningtype.model";

@Component({
  selector: 'app-earningtypes-list',
  templateUrl: './earningtypes-list.component.html',
  styleUrls: ['./earningtypes-list.component.css']
})
export class EarningtypesListComponent implements OnInit {
  earningtypes: Earningtype[] =[
    new Earningtype('Informatica Salary','25-07-2020','ABC-123'),
    new Earningtype('Oracle Salary','28-07-2020','ABC-123'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
