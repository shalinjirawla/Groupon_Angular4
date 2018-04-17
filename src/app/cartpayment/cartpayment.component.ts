import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Observable } from 'rxjs/Rx'; 

@Component({
  selector: 'app-cartpayment',
  templateUrl: './cartpayment.component.html',
  styleUrls: ['./cartpayment.component.css']
})
export class CartpaymentComponent implements OnInit {
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  PaymentDetailForm : FormGroup;
  Q = 1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.PaymentDetailForm = this.formBuilder.group({
      CardName : [''],
      CardNumber : [''],
      CVV : ['',[Validators.required, Validators.maxLength(4)]]
    });
  }

  Plus() {
    if (this.Q <= 9) {
      this.Q = 1 + this.Q++;
    }

  }
  Minus() {
    if (this.Q >= 2)
      this.Q--
  }


}
