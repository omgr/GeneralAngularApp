import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpCallsService {

  constructor(private http:HttpClient) { }
  // providedIn: 'root'
  public getCall(url:string,callback?:Function|undefined){
    this.http.get(url).subscribe((data)=>{
      if(callback != undefined){
        callback(data);
      }
    });


  }
}
