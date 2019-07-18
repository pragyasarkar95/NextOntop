import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';


const appRoutes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'home', component:HomeComponent},
  { path: 'about', component:AboutComponent},
  { path: 'profile', component:ProfileComponent},

  // { path: 'signup', component:SignupComponent},
  // { path: 'home',component:HomeComponent,
//   children:[
//   ]

 { path: '', component:LoginComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{ enableTracing:false })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
