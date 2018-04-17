import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/Observable/of';

import { CustomReview, DealRecom } from '../Model/DealReview.Model';


@Injectable()
export class DealReviewService {
    //////////////////////////////////////
    //                                  //
    //       DealReview Service         //
    //                                  //
    //////////////////////////////////////

    BaseUrl = `http://localhost:61072/api/DealReview`;
    BaseRecom = `http://localhost:61072/api/DealRecom`;

    constructor(private http: Http) { }

    getDealByID( id : number ) : Observable<CustomReview[]>{
        const url = `${this.BaseUrl}/GetAllReview/${id}`;
        return this.http.get(url)
        .map(this.extractData);
    }

    getAverageRate( id : number ) : Observable<DealRecom[]>{
        const url = `${this.BaseRecom}/GetDetailByID/${id}`;
        return this.http.get(url)
        .map(this.extractData);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body;
    }
}