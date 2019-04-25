import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';



 const loginRoutes: Routes = [
  {path: 'SignUp', component: SignupComponent},
 ];

@NgModule({
imports: [
    RouterModule.forChild(loginRoutes)
],
exports: [RouterModule]
})
export class LoginRoutingModule{

}
