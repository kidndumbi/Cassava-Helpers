import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CasModalDialogModule } from 'cassava-helpers';
import { MyModalComponent } from './my-modal/my-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MyModalComponent
  ],
  imports: [
    BrowserModule,
    CasModalDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MyModalComponent]
})
export class AppModule { }
