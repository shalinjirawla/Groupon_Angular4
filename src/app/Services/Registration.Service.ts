import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/Observable/of';

import { Registration } from '../Model/Registration.Model';

@Injectable()
export class RegistrationService {
    //////////////////////////////////////
    //                                  //
    //       Registration Service       //
    //                                  //
    //////////////////////////////////////

    BaseUrl = `http://localhost:61072/api/Registration`;
        
    constructor(private http: Http) { }

    createUser(reg : Registration): Observable<Registration> {
        const url = `${this.BaseUrl}/CreateUser`;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, reg, options)
            .map(this.extractData);
    }

    
    private extractData(response: Response) {
        let body = response.json();
        return body;
    }

}