import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/Observable/of';

import { Cart, ListCart, UpdateCart } from '../Model/Cart.Model';

@Injectable()
export class CartService {
    //////////////////////////////////////
    //                                  //
    //           Cart Service           //
    //                                  //
    //////////////////////////////////////

    BaseUrl = `http://localhost:61072/api/Cart`;

    constructor(private http: Http) { }

   
    getDealByID( id : number ) : Observable<ListCart[]>{
        const url = `${this.BaseUrl}/GetCartItemList/${id}`;
        return this.http.get(url)
        .map(this.extractData);
    }

    
    InsertCartItem(cart : Cart): Observable<Cart> {
        const url = `${this.BaseUrl}/AddCartItem`;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, cart, options)
            .map(this.extractData);
    }

    UpdateCartQty(updateCart : UpdateCart): Observable<UpdateCart>{
        const url = `${this.BaseUrl}/UpdateCartItem`;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, updateCart, options)
            .map(this.extractData);
    }
    
    deleteCartItemByID( id : number ) : Observable<UpdateCart>{
        const url = `${this.BaseUrl}/DeleteCartItem/${id}`;
        return this.http.get(url)
        .map(this.extractData);
    }

     private extractData(response: Response) {
        let body = response.json();
        return body;
    }
}