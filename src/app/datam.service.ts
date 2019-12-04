import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { filter, map, flatMap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {data1} from './data1';

@Injectable({
  providedIn: 'root'
})
export class DatamService {

  
    private _url: string = "/assets/MindAppJSON.json";

    constructor(private http:HttpClient) { }
  
    getdata(): Observable<data1[]>{
      return this.http.get<data1[]>(this._url)
                      .catch(this.errorHandler);
    }
    errorHandler(error: HttpErrorResponse){
      return Observable.throw(error.message || "Server Error");
    }

   
    
   
}
