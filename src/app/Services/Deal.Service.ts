import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/Observable/of';

import { Deal, AllDeal } from '../Model/Deal.Model';

@Injectable()
export class DealService {
    //////////////////////////////////////
    //                                  //
    //           Deal Service           //
    //                                  //
    //////////////////////////////////////

    BaseUrl = `http://localhost:61072/api/Deal`;

    constructor(private http: Http) { }

    getHotDeals() : Observable<AllDeal[]>{
        const url = `${this.BaseUrl}/GetHotDeals`;
        return this.http.get(url)
        .map(this.extractData);
    }

    getTrendingDeals() : Observable<AllDeal[]>{
        const url = `${this.BaseUrl}/GetTrendingDeal`;
        return this.http.get(url)
        .map(this.extractData);
    }

    getRecommendedDeals() : Observable<AllDeal[]>{
        const url = `${this.BaseUrl}/GetRecommendedDeal`;
        return this.http.get(url)
        .map(this.extractData);
    }

    getRecentlyDeals() : Observable<AllDeal[]>{
        const url = `${this.BaseUrl}/GetRecentlyDeal`;
        return this.http.get(url)
        .map(this.extractData);
    }

    getDealByID( id : number ) : Observable<AllDeal[]>{
        const url = `${this.BaseUrl}/GetDealbyID/${id}`;
        return this.http.get(url)
        .map(this.extractData);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body;
    }

}
