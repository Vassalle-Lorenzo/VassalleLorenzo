import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListaGiochiComponent } from './components/lista-giochi/lista-giochi.component';
import { DettaglioGiochiComponent } from './components/dettaglio-giochi/dettaglio-giochi.component';
import { ModificaGiochiComponent } from './components/modifica-giochi/modifica-giochi.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [

  {path: 'home', component: HomeComponent },

  {path: 'game-list', component: ListaGiochiComponent },

  {path: 'game-detail', component: DettaglioGiochiComponent },

  {path: 'edit-game', component: ModificaGiochiComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaGiochiComponent,
    DettaglioGiochiComponent,
    ModificaGiochiComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(​
      appRoutes,​
    )​
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
