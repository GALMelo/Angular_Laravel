import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllComponent } from './users/view-all/view-all.component';
import { ViewUserComponent } from './users/view-user/view-user.component';

@NgModule({
  declarations: [AppComponent, ViewAllComponent, ViewUserComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
