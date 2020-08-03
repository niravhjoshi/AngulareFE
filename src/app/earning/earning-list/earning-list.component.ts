import { Component, OnInit } from '@angular/core';
import {EarningModel} from "../earning.model";

@Component({
  selector: 'app-earning-list',
  templateUrl: './earning-list.component.html',
  styleUrls: ['./earning-list.component.css']
})
export class EarningListComponent implements OnInit {
  Earnings: EarningModel[] = [
    new EarningModel('ABC-123','Oracle Salary','Nirav Joshi',199,'Oracle Comm','31-Jul-2019','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLZSp43XkgHy7btRB7jeRfQfGw0FAlmtrdfA&usqp=CAU'),
    new EarningModel('ABC-124','Informatica Salary','Pareen Joshi',599,'Infa Comm','31-Aug-2019','null'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
