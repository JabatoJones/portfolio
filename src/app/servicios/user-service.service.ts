import { Injectable } from '@angular/core';
import { Userlogin } from "../models/userlogin";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userLogin: Userlogin;


  constructor(private http: HttpClient) { }

  login(datosAcceso: any): Observable<any> {
    
    let body = datosAcceso;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    return this.http.post('http://localhost:3000/api/login', body, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
         "Access-Control-Allow-Origin": "*",
      }
    })
  };
}