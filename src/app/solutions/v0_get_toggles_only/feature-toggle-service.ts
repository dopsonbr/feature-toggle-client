import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class FeatureToggleService {

  constructor(private http: HttpClient) {}

  fetchStoreFeatureToggles(storeNumber: string, environment: string, productTeam: string): Observable<string[]> {
    console.log(`getting feature toggles for ${storeNumber} ${environment} ${productTeam}`);
    const url = `http://localhost:8080/featureToggles?storeNumber=${storeNumber}&environment=${environment}&productTeam=${productTeam}`;
    return this.http.get<string[]>(url);
  }

}

const exampleFeatureToggles = [
  'PILOT',
  'PAYMENT_V2',
  'NEXT_DAY_DELIVERY',
  'ENHANCED_PRICING',
  'SUPER_SPECIAL_CATALOG'
];
