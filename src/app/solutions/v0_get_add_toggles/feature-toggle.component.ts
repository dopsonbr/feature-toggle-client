import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import { FeatureToggleService } from './feature-toggle-service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-feature-toggle',
  templateUrl: './feature-toggle.component.html',
  styleUrls: ['./feature-toggle.component.css']
})
export class FeatureToggleComponent implements OnInit {

  storeFeatureTogglesForm = new FormGroup({
    storeNumber: new FormControl('9798'),
    environment: new FormControl('development'),
    productTeam: new FormControl('sell')
  });
  storeFeatureToggles: Observable<string[]>;

  addStoreFeatureToggleForm: FormGroup;

  constructor(private featureToggleService: FeatureToggleService, private fb: FormBuilder) {
    this.createAddFeatureToggleForm();

  }

  ngOnInit() {

  }

  createAddFeatureToggleForm() {
    this.addStoreFeatureToggleForm = this.fb.group({
      feature: '',
      storeNumber: '9798',
      environment: 'development',
      productTeam: 'sell'
    });
  }

  getStoreFeatureToggles() {
    this.storeFeatureToggles = this.featureToggleService.fetchStoreFeatureToggles(
        this.storeFeatureTogglesForm.value.storeNumber,
        this.storeFeatureTogglesForm.value.environment,
        this.storeFeatureTogglesForm.value.productTeam
      );
  }

  addFeatureToggle() {
    this.storeFeatureToggles = this.featureToggleService.addStoreFeatureToggle(
      this.addStoreFeatureToggleForm.value.feature,
      this.addStoreFeatureToggleForm.value.storeNumber,
      this.addStoreFeatureToggleForm.value.environment,
      this.addStoreFeatureToggleForm.value.productTeam
    );
  }
}
