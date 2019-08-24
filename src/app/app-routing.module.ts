import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewentryComponent } from './newentry/newentry.component';
import { MylogComponent } from './mylog/mylog.component';


//const routes: Routes = [];

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'newentry', component: NewentryComponent },
  { path: 'mylog', component: MylogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
