import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateCamaComponent } from './create-cama/create-cama.component';
import { CamaDetailsComponent } from './cama-details/cama-details.component';
import { CamasListComponent } from './camas-list/camas-list.component';
import { SearchCamasComponent } from './search-camas/search-camas.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateCamaComponent,
    CamaDetailsComponent,
    CamasListComponent,
    SearchCamasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
