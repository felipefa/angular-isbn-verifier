import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IsbnVerifierComponent } from './isbn-verifier/isbn-verifier.component';
import { IsbnGeneratorComponent } from './isbn-generator/isbn-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    IsbnVerifierComponent,
    IsbnGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
