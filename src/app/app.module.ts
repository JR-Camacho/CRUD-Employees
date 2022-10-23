import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MessageErrorComponent } from './components/message-error/message-error.component';
import { MessageConfirmationComponent } from './components/message-confirmation/message-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    MessageErrorComponent,
    MessageConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
