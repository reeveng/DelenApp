import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './components/contact/card/card.component';
import { NavComponent } from './components/nav/nav.component';
import { RemoveWhiteSpacesPipe } from './pipes/remove-white-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CardComponent,
    NavComponent,
    RemoveWhiteSpacesPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
