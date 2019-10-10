import { Component } from '@angular/core';
import { Http, RequestOptions,Response,Headers } from '@angular/http';
import { Router } from '@angular/router';
import { CreateComponent } from '../create/create.component';
import { LoginService } from './login.service';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: Http, private router: Router,private loginService: LoginService) {
    this.http = http;
    this.router = router;
  }

  login(empId,password){
    console.log(empId);
    console.log(password);
    let header=new Headers({'Content-Type': 'application/json'});
    header.append('access-control-allow-origin','*');
    let body=JSON.stringify({empId,password});
    let response = '';
    console.log(body)
     this.http.post('http://localhost:8888/login',body,{headers:header})
     .subscribe(result => {
       this.router.navigate(['home1']);
     })
  }
}
