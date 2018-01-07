import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-feature-toggle',
  templateUrl: './feature-toggle.component.html',
  styleUrls: ['./feature-toggle.component.css']
})
export class FeatureToggleComponent implements OnInit {

  storeFeatureTogglesForm = new FormGroup({
    storeNumber: new FormControl(),
    environment: new FormControl(),
    product: new FormControl()
  });
  storeFeatureToggles: string[];

  constructor() { }

  ngOnInit() {
    this.getStoreFeatureToggles();
  }

  getStoreFeatureToggles() {
      this.storeFeatureToggles = [
        'SPOS',
        'pilot',
        'DELIVERY',
        'PICKUP',
        'discount-engine',
        'TaxExempt',
        'InventoryOverride',
        'ChangePalletCount',
        'ChangeTruckType',
        'DeliveryChargeMarkdown',
        'NewDeliveryUI'
      ];
  }
}
