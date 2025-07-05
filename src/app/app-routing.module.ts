import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router';
import { ExamenComponent } from './examen/examen.component';
import { HomeComponent } from './home/home.component';
import { AjouterexamenComponent } from './ajouterexamen/ajouterexamen.component';
import {ExamenupdateComponent} from './examenupdate/examenupdate.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes:Routes=[
  {path:"home" ,component:HomeComponent},
 { path: "examen", component: ExamenComponent },
{ path: "ajouterexamen", component: AjouterexamenComponent },
{path:"examenupdate/:id",component:ExamenupdateComponent},
{path:"**",component:NotfoundComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
