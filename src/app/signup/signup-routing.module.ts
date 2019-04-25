import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';


// const appRoutes: Router = {
 const signupRoutes: Routes = [
  {path: 'Login', component: LoginComponent},

 ];

@NgModule({
imports: [
  RouterModule.forChild(signupRoutes)
],
exports: [signupRoutes]
})
export class SignupRoutingModule {

}
