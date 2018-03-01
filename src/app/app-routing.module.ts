import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {StatusComponent} from "./status/status.component";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'status', component: StatusComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
