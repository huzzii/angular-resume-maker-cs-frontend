import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AbcComponent } from './components/abc.component';
import { HuhComponent } from './components/huh/huh.component';

@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    HuhComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
