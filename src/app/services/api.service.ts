import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Injectable()

export class ApiService {
    headers : Headers = new Headers({
        'Content-type': 'application/json',
        Accept: 'application/json'
    });
}