import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { PassengerMngtComponent } from './admin/passenger-mngt/passenger-mngt.component';
import { HomeComponent } from './admin/home/home.component';
import { ControlMessageComponent } from './shared/control-message/control-message.component';
import { HttpModule, JsonpModule, Http, RequestOptions, XHRBackend } from '@angular/http';

import { Constants } from './app.config';
import { ValidationService } from './_services/validation.service';
import { LoginService } from './_services/login.service';
import { HttpService } from './_services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminComponent,
    PassengerMngtComponent,
    HomeComponent,
    ControlMessageComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule    
  ],
  exports: [
    HttpModule
  ],
  providers: [ValidationService, LoginService, HttpService, Constants],
  bootstrap: [AppComponent]
})
export class AppModule { }
