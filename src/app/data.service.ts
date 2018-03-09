import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class dataService {
    constructor(private _httpclient:Http){

    }
    getData(){
        return this._httpclient.get('http://www.mocky.io/v2/5aa236f52f0000b01ad46405');
    }
}