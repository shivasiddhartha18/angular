import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {DataTableModule} from "angular2-datatable";

import { AppComponent } from './app.component';
import { DataGridComponent } from './datagrid/datagrid.component';
import {dataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    DataTableModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'datagrid', pathMatch: 'full' },
      { path: 'datagrid', component: DataGridComponent }
    ])
  ],
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
