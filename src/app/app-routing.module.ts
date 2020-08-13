import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { cashSendComponent } from './cashSend.component';
import { RetailComponent } from './retail.component';

const routes: Routes = [
  { path: '', component: cashSendComponent },
  { path: 'cashSend', component: cashSendComponent },
  { path: 'retail', component: RetailComponent }  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
