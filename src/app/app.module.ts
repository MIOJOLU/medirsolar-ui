import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { MedicaoComponent } from './components/medicao/medicao.component';
import { EstatisticaComponent } from './components/estatistica/estatistica.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicaoComponent,
    EstatisticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
