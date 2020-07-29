import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

//App Component list

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonsListComponent } from './persons/persons-list/persons-list.component';
import { PersonDetailComponent } from './persons/person-detail/person-detail.component';
import { PersonItemComponent } from './persons/persons-list/person-item/person-item.component';
import { EarningtypesComponent } from './earningtypes/earningtypes.component';
import { EarningtypesListComponent } from './earningtypes/earningtypes-list/earningtypes-list.component';
import { EarningtypeItemComponent } from './earningtypes/earningtypes-list/earningtype-item/earningtype-item.component';
import { EarningtypeDetailComponent } from './earningtypes/earningtype-detail/earningtype-detail.component';
import { PersonEditComponent } from './persons/persons-list/person-edit/person-edit.component';
import { EarningtypeEditComponent } from './earningtypes/earningtypes-list/earningtype-edit/earningtype-edit.component';
import { EarningComponent } from './earning/earning.component';
import { EarningListComponent } from './earning/earning-list/earning-list.component';
import { EarningDetailComponent } from './earning/earning-detail/earning-detail.component';
import { EarningEditComponent } from './earning/earning-list/earning-edit/earning-edit.component';
import { EarningItemComponent } from './earning/earning-list/earning-item/earning-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonsComponent,
    PersonsListComponent,
    PersonDetailComponent,
    PersonItemComponent,
    PersonEditComponent,
    EarningtypesComponent,
    EarningtypesListComponent,
    EarningtypeItemComponent,
    EarningtypeDetailComponent,
    EarningtypeEditComponent,
    EarningComponent,
    EarningListComponent,
    EarningDetailComponent,
    EarningEditComponent,
    EarningItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
