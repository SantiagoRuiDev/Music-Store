import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstrumentListComponent } from './components/instrument-list/instrument-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InstrumentCartComponent } from './components/instrument-cart/instrument-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentListComponent,
    InputNumberComponent,
    InstrumentCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
