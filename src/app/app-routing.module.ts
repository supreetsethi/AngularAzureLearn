import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

// const appRoutes: Router = {
 const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
 ];

@NgModule({
imports:[
   RouterModule.forRoot(appRoutes)
],
exports: [RouterModule]
})
export class AppRoutingModule{

}
