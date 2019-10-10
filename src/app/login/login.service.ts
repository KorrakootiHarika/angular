import { Injectable } from '@angular/core';
import { Http, Response,Headers} from '@angular/http';
import { Router } from '@angular/router';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : Http) { 
    this.http = http;
  
  }

  login(empId: string,password: string){
    console.log('login service');
    
}
}
