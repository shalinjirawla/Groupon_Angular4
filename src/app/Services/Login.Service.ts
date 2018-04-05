import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/Observable/of';

import { Login } from '../Model/Login.Model';

@Injectable()
export class LoginService {
    //////////////////////////////////////
    //                                  //
    //          Login Service           //
    //                                  //
    //////////////////////////////////////

    BaseUrl = `http://localhost:61072/api/Login`;

    constructor(private http: Http) { }

    loginUser(login : Login): Observable<Login> {
        const url = `${this.BaseUrl}/LoginUser`;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, login, options)
            .map(this.extractData);
    }
    
    private extractData(response: Response) {
        let body = response.json();
        return body;
    }
}