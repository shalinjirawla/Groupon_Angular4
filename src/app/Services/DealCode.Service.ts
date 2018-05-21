import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/Observable/of';

import { DealCode } from '../Model/DealCode.Model';

@Injectable()
export class DealCodeService {
    //////////////////////////////////////
    //                                  //
    //       DealCode Service           //
    //                                  //
    //////////////////////////////////////

    BaseUrl = `http://localhost:61072/api/DealCode`;

    constructor(private http: Http) { }

    ApplyCode( DC : DealCode ) : Observable<DealCode>{
        const url = `${this.BaseUrl}/GetCodeStatus`;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, DC, options)
        .map(this.extractData);
    }
    
    private extractData(response: Response) {
        let body = response.json();
        return body;
    }

}