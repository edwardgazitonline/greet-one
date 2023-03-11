import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
