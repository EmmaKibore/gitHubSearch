import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import{ HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http'


// import { DisplayComponent } from './display/display.component';
// import { AppComponent } from './app.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     DisplayComponent,
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpModule,
//     HttpClientModule
//   ],
//   providers: [HttpModule, HttpClientModule],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
