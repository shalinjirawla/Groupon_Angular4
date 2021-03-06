import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/Observable/of';

import { SendGift } from '../Model/SendGift.Model';

@Injectable()
export class SendGiftService {
    //////////////////////////////////////
    //                                  //
    //       SendGift Service           //
    //                                  //
    //////////////////////////////////////

    BaseUrl = `http://localhost:61072/api/SendGift`;

    constructor(private http: Http) { }

    ApplyCode( SG : SendGift ) : Observable<SendGift>{
        const url = `${this.BaseUrl}/InsertSendGift`;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, SG, options)
        .map(this.extractData);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body;
    }
}