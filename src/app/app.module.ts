import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//Material Style
import { MatButtonModule, MatMenuModule, MatCardModule , MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Componentes
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { CurrentAppsComponent } from './components/current-apps/current-apps.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { FooterComponent } from './components/footer/footer.component';

//Servicios
import { HttpClientModule } from '@angular/common/http';
import { TemplateSrvService } from './servicios/template-srv.service';
import { AddNewAppComponent } from './components/add-new-app/add-new-app.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    CurrentAppsComponent,
    UserInfoComponent,
    FooterComponent,
    AddNewAppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    NgbModule.forRoot(),
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    TemplateSrvService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
