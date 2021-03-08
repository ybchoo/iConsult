import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QrComponent } from './qr/qr.component';
import { QrsComponent } from './qrs/qrs.component';
import { SortPipe } from './sort.pipe';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { PermissionDirective } from './permission.directive';

@NgModule({
  declarations: [
    AppComponent,
    QrComponent,
    QrsComponent,
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
