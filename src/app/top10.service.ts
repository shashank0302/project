import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class Top10Service {
  data:any
  id:any
  constructor(private httpObject:HttpClient) { }

  getData():Observable<any>{
    return this.httpObject.get('http://localhost:3000/top10')
  }

  getTop10DataByname(id):Observable<any>{
    return this.httpObject.get('http://localhost:3000/top10/'+id)
  } 

  setdata(id,probj){
     this.data=probj
     this.id=id
  }

  getdata(){
    return this.data
  }
  getid(){
    return this.id
  }

}
