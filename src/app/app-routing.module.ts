import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewAppComponent } from './components/add-new-app/add-new-app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addApp' , component: AddNewAppComponent },
  { path: '', component: LoginComponent },
  { path: 'register' , component:RegistroComponent},
  { path: 'profile' ,component:UserProfileComponent}
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }