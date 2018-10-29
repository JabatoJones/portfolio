import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewAppComponent } from './components/add-new-app/add-new-app.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addApp' , component: AddNewAppComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }