import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Examen } from 'src/core/models/examen';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http:HttpClient) { }

    getSameValueOf(list:any[], critiria:string, value:any){
let n=0
    for(let i in list){
      if(list[i][critiria]==value){

        n++
          }
        }
    return n

  }

getallcategorie():Observable<Examen[]>{
  return this.http.get<Examen[]>("http://localhost:3000/Examens/")
}
addcategorie(res:Examen):Observable<Examen[]>{
  return this.http.post<Examen[]>("http://localhost:3000/Examens",res)
}
getbycategorie(id:any):Observable<Examen>{
  return this.http.get<Examen>("http://localhost:3000/Examens/"+id)
}
deletecategorie(id:any):Observable<Examen>{
  return this.http.delete<Examen>("http://localhost:3000/Examens/"+id)
}
updatecategorie(id:any,res:Examen):Observable<Examen[]>{
  return this.http.put<Examen[]>("http://localhost:3000/Examens/"+id,res)
}
}
