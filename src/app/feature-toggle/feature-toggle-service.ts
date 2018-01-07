import { Injectable } from '@angular/core';

@Injectable()
export class FeatureToggleService {

  fetchStoreFeatureToggles(): string[] {
    return exampleFeatureToggles;
  }

}

const exampleFeatureToggles = [
  'PILOT',
  'PAYMENT_V2',
  'NEXT_DAY_DELIVERY',
  'ENHANCED_PRICING',
  'SUPER_SPECIAL_CATALOG'
];
