import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewentryComponent } from './newentry/newentry.component';
import { MylogComponent } from './mylog/mylog.component';
import { HttpClientModule } from '@angular/common/http';
import { MydataService } from './mydata.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'newentry', component: NewentryComponent },
  { path: 'mylog', component: MylogComponent }
];




@NgModule({
  declarations: [
    AppComponent,
    NewentryComponent,
    MylogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
