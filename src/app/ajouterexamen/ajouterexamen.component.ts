import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../service/examen.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Examen } from 'src/core/models/examen';


@Component({
  selector: 'app-ajouterexamen',
  templateUrl: './ajouterexamen.component.html',
  styleUrls: ['./ajouterexamen.component.css'],
})
export class AjouterexamenComponent implements OnInit {
  constructor(private service: ExamenService, private r: Router) {}
   listres =new Examen()
  addF!: FormGroup;
  ngOnInit(): void {
   this.addF = new FormGroup({   
             // id:new FormControl ('',Validators.required),
             Responsable: new FormControl ('',[Validators.required,Validators.pattern(/^[A-Z]/),Validators.maxLength(10)]),
            Session: new FormControl ('',[Validators.required,Validators.pattern(/^principale+$/)]),
             coeff: new FormControl ('',[Validators.required,Validators.pattern(/^[1-5]/)])
        
            })
    
  }
     add(){
        console.log(this.addF.value)
        this.service.addcategorie(this.addF.value).subscribe(()=>{
          console.log("Added")
          this.r.navigateByUrl("home")
        })
          }}
