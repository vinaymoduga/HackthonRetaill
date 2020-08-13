import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { cashSendComponent } from './cashSend.component';
import { RetailComponent } from './retail.component';

const routes: Routes = [
  { path: '', component: RetailComponent },
  { path: 'cashSend', component: RetailComponent },
  { path: 'retail', component: RetailComponent }  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
