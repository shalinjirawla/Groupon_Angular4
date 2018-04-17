import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/Observable/of';

import { Cart } from '../Model/Cart.Model';

@Injectable()
export class CartService {
    //////////////////////////////////////
    //                                  //
    //           Cart Service           //
    //                                  //
    //////////////////////////////////////

    BaseUrl = `http://localhost:61072/api/Offers`;

    constructor(private http: Http) { }

    checkStatus( cart : Cart ) : Observable<Cart>{
        const url = `${this.BaseUrl}/OfferDealByID`;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, cart, options)
        .map(this.extractData);
    }

     private extractData(response: Response) {
        let body = response.json();
        return body;
    }
}