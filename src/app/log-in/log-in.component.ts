import { Component, OnInit, Inject,  ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Login } from '../Model/Login.Model';
import { LoginService } from '../Services/Login.Service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../shared/layout/header.component'; 
import { Http } from '@angular/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  LoginForm : FormGroup;
  LoginModel : Login;

  constructor(private formBuilder: FormBuilder,
              private loginServive : LoginService,
              private route: ActivatedRoute,
              private router: Router,
            private http : Http ) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      EmailID : ['',Validators.required],
      Password : ['',Validators.required]
    });
  }

  saveDetails(){
    let email = this.LoginForm.value.EmailID;
    let pass = this.LoginForm.value.Password;

    let data = Object.assign({}, this.LoginModel, {
      EmailID : email,
      Password : pass
    });

    this.loginServive.loginUser(data).subscribe(response => {

      console.log(); 
      let emi = response.EmailID;
      let pas = response.Password;
      let guid = response.ID;
      
      
      let CurrentUser = guid;
          

      if(this.LoginForm.value.EmailID == response.EmailID && this.LoginForm.value.Password == response.Password){
        localStorage.setItem("LoginUser", CurrentUser);
        var a = localStorage.getItem("LoginUser");
        this.onSaveComplete();
      }else{
        this.router.navigate(['/Login']);
       alert("Wrong Email Address And Password")
     }

    });
  }

  onSaveComplete() {
    location.reload();
    this.LoginForm.reset();
    this.router.navigate(['']);

  }

}
