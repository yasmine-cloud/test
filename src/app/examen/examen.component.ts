import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../service/examen.service';
import { Examen } from 'src/core/models/examen';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {


  constructor(private ExamService:ExamenService){
      
    }
      
       listCategorie: Examen[]=[]
         ngOnInit(): void {
         this.ExamService.getallcategorie().subscribe((data)=>{
         this.listCategorie=data
         console.log(this.listCategorie)
         })
       
         }
     
         supprime(id:any){
         this.ExamService.deletecategorie(id).subscribe(()=>{
         console.log('deleted!!!')
         this.ngOnInit()
       })
     
     }

}
