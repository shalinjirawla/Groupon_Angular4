import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/Observable/of';

import { Category } from '../Model/Category.Model';

@Injectable()
export class CategoryService {
    //////////////////////////////////////
    //                                  //
    //       Category Service           //
    //                                  //
    //////////////////////////////////////

    BaseUrl = `http://localhost:61072/api/Category`;
    
    constructor(private http: Http) { }

    getCategoryList() : Observable<Category[]>{
        const url = `${this.BaseUrl}/GetListCategory`;
        return this.http.get(url)
        .map(this.extractData);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body;
    }
}