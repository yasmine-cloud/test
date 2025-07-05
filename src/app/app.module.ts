import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExamenComponent } from './examen/examen.component';
import { HomeComponent } from './home/home.component';
import { AjouterexamenComponent } from './ajouterexamen/ajouterexamen.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExamenupdateComponent } from './examenupdate/examenupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamenComponent,
    HomeComponent,
    AjouterexamenComponent,
    HeaderComponent,
    NotfoundComponent,
    ExamenupdateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule ,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
