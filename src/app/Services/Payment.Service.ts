import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/Observable/of';

import { PaymentDetail } from '../Model/Payment.Model';

@Injectable()
export class PaymentService {
    //////////////////////////////////////
    //                                  //
    //        Payment Service           //
    //                                  //
    //////////////////////////////////////

    BaseUrl = `http://localhost:61072/api/PaymentDetail`;

    constructor(private http: Http) { }

}