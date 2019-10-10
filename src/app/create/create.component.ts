import { Component, OnInit, Input } from '@angular/core';
import { Http,Headers } from '@angular/http';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    
  constructor(private http:Http,) {
    this.http=http;
   }

  ngOnInit() {
  }
  create(empId,firstName,lastName,email,gender,age){
    let body=JSON.stringify({empId,firstName,lastName,email,gender,age});
    console.log(body);
        let header=new Headers({'Content-Type': 'application/json'});
    header.append('access-control-allow-origin','*');
    this.http.post('http://localhost:8888/register',body,{headers:header})
     .subscribe(res => {
        alert('successfully registered');
     })
  }

}
