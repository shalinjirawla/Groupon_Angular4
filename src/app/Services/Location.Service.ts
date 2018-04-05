import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/Observable/of';

import { Location } from '../Model/Location.Model';

@Injectable()
export class LocationService {
    //////////////////////////////////////
    //                                  //
    //       Location Service           //
    //                                  //
    //////////////////////////////////////

    BaseUrl = `http://localhost:61072/api/Location`;
    
    constructor(private http: Http) { }

    getLocationList() : Observable<Location[]>{
        const url = `${this.BaseUrl}/GetListLocation`;
        return this.http.get(url)
        .map(this.extractData);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body;
    }
}