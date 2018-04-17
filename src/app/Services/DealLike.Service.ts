import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/Observable/of';

import { DealLike } from '../Model/DealLike.Model';

@Injectable()
export class DealLikeService {
    //////////////////////////////////////
    //                                  //
    //        DealLike Service          //
    //                                  //
    //////////////////////////////////////

    BaseUrl = `http://localhost:61072/api/DealLike`;

    constructor(private http: Http) { }

    dealLike(DL : DealLike): Observable<DealLike> {
        const url = `${this.BaseUrl}/InsertDealLike`;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, DL, options)
            .map(this.extractData);
    }

    checkStatus( DL : DealLike ) : Observable<DealLike[]>{
        const url = `${this.BaseUrl}/CheckLike`;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, DL, options)
        .map(this.extractData);
    }

     private extractData(response: Response) {
        let body = response.json();
        return body;
    }
}
