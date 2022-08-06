import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllComponent } from './users/view-all/view-all.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { RegisterUserComponent } from './views/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewAllComponent,
    ViewUserComponent,
    FormRegisterComponent,
    RegisterUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
