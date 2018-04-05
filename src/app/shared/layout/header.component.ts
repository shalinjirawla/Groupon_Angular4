import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({

  selector: 'layout-header',

  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})

export class HeaderComponent {

  data;
  active : boolean = false;
  deactive : boolean = false;

  constructor(
    private route: ActivatedRoute ,
    private router : Router) {}

    ngOnInit(){
      this.login();
    }
  login(){

    var aa = localStorage.getItem("LoginUser");
    if(aa != null ){
      this.active = true;
     }
    else{
      this.active = false;
     }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('LoginUser');
   
    this.router.navigate(['/']);
    location.reload();
   }
}