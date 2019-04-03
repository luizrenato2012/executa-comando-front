import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { ItemExecucaoService } from './principal/item-execucao.service';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ItemExecucaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
