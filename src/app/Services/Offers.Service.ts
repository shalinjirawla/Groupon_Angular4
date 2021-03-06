import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/Observable/of';

import { Offers } from '../Model/Offers.Model';
import { Cart } from '../Model/Cart.Model';

@Injectable()
export class OffersService {
    //////////////////////////////////////
    //                                  //
    //         Offers Service           //
    //                                  //
    //////////////////////////////////////

    BaseUrl = `http://localhost:61072/api/Offers`;

    constructor(private http: Http) { }

    getOfferDealByID(id : number) : Observable<Offers[]>{
        const url = `${this.BaseUrl}/DealOffers/${id}`;
        return this.http.get(url)
        .map(this.extractData);
    }

    OfferDealByID(cart : Cart) : Observable<Cart>{
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