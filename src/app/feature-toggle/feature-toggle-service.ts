import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';
import {RequestOptions} from '@angular/http';

@Injectable()
export class FeatureToggleService {

  baseUrl = 'http://sell.apps.homedepot.com/router/UsomMessaging/configuration';


  constructor(private http: HttpClient) {}

  fetchStoreFeatureToggles(storeNumber: string, environment: string, productTeam: string): Observable<string[]> {
    let headers = new Headers();
    headers.set({'usom-correlationid': | 'username'});
    headers.set('applictionname', 'admin');
    const url = `${this.baseUrl}/storefeatureToggles?store=${storeNumber}&environment=${environment}&product=${productTeam}`;
    return this.http.get<string[]>(url, { headers});
  }

  addStoreFeatureToggle(feature: string, storeNumber: string, environment: string, productTeam: string): Observable<string[]> {
    const url = `${this.baseUrl}/storefeatureToggles?feature=${feature}&storeNumber=${storeNumber}&environment=${environment}&productTeam=${productTeam}`;
    return this.http.put<string[]>(url, null);
  }

}

const exampleFeatureToggles = [
  'PILOT',
  'PAYMENT_V2',
  'NEXT_DAY_DELIVERY',
  'ENHANCED_PRICING',
  'SUPER_SPECIAL_CATALOG'
];
