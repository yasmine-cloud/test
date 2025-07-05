import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../service/examen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Examen } from 'src/core/models/examen';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-examenupdate',
  templateUrl: './examenupdate.component.html',
  styleUrls: ['./examenupdate.component.css']
})
export class ExamenupdateComponent implements OnInit{
  constructor(private service:ExamenService, private r:Router ,private act:ActivatedRoute){}
           idupdate!:any 
         listres =new Examen()
         addF!:FormGroup

            ngOnInit(): void{
             this.idupdate=this.act.snapshot.params['id']
          
              this.addF = new FormGroup({   
              //  id:new FormControl ('',Validators.required),
               Responsable: new FormControl ('',[Validators.required,Validators.pattern(/^[A-Z]/),Validators.maxLength(10)]),
                
              Session: new FormControl ('',[Validators.required,Validators.pattern(/^principale+$/)]),
               coeff: new FormControl ('',[Validators.required,Validators.pattern(/^[1-5]/)])
          
              })
      
          
            this.service.getbycategorie(this.idupdate).subscribe((data)=>
          {
                this.listres=data
                this.addF.patchValue(this.listres as any)
          })
            }
            add(){
          console.log(this.addF.value)
      this.service.updatecategorie(this.idupdate,this.addF.value).subscribe(()=>{
        console.log("updated")
        this.r.navigateByUrl("home")
      })
        
            }}


